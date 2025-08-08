// Mejora: soporta frases completas en negrita y bold inline. Calcula ratio de bold.
export function enrichPost(raw, lang = "es") {
  const original = (raw.content?.[lang] || "").trim();

  // 1. Bloque especial "También puedes leer:" (o "También puedes leer")
  const lines = original.split(/\r?\n/);
  const transformed = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^También puedes leer:?$/i.test(line.trim())) {
      const items = [];
      i++;
      while (i < lines.length && /^\s*-\s*\[.+?\]\(.+?\)/.test(lines[i])) {
        items.push(lines[i].trim());
        i++;
      }
      transformed.push("::RES_TITLE::También puedes leer:");
      items.forEach(it => {
        // extraer label y url
        const m = it.match(/-\s*\[(.+?)\]\((.+?)\)/);
        if (m) transformed.push(`::RES_ITEM::${m[1]}|${m[2]}`);
      });
      continue;
    }
    transformed.push(line);
    i++;
  }

  const text = transformed.join("\n");

  // Headings ##
  const marked = text.replace(/^##\s+(.+)$/gm, (_, t) => `\n::H::${t.trim()}\n`);

  const wordCount = marked
    .split(/\s+/)
    .filter(w => w && !w.startsWith("::H::") && !w.startsWith("::RES_::") && !w.startsWith("::RES_TITLE::") && !w.startsWith("::RES_ITEM::"))
    .length;

  const FULL_SENTENCE_ONLY = false;

  const roughBlocks = marked
    .split(/[\r\n]{2,}/u)
    .map(s => s.trim())
    .filter(Boolean);

  const blocks = [];
  roughBlocks.forEach(b => {
    if (b.startsWith("::H::")) {
      blocks.push({ type: "heading", raw: b.replace(/^::H::/, "") });
    } else if (b.startsWith("::RES_TITLE::")) {
      blocks.push({ type: "res-title", raw: b.replace(/^::RES_TITLE::/, "") });
    } else if (b.startsWith("::RES_ITEM::")) {
      // agrupar ítems consecutivos
      const items = [];
      let current = b;
      let idx = roughBlocks.indexOf(b) + 1; // fallback simple
      items.push(current);
      // (Simplificamos: ya vienen separados en transformed, se procesan luego en un pass)
      blocks.push({ type: "res-item", raw: b.replace(/^::RES_ITEM::/, "") });
    } else if (b.startsWith("::RES_ITEM::")) {
      // handled
    } else {
      blocks.push({ type: "text-group", raw: b });
    }
  });

  const warnings = [];
  let boldWordCount = 0;
  const htmlParts = [];

  // Recolectar ítems de recursos
  let resourceBuffer = [];

  const flushResources = () => {
    if (resourceBuffer.length) {
      const lis = resourceBuffer
        .map(r => {
          const [label, url] = r.split("|");
            return `<li><a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)}</a></li>`;
        })
        .join("");
      htmlParts.push(
        `<div class="more-links"><div class="more-links-title">También puedes leer:</div><ul>${lis}</ul></div>`
      );
      resourceBuffer = [];
    }
  };

  blocks.forEach(b => {
    if (b.type === "heading") {
      flushResources();
      htmlParts.push(`<h3 class="post-section">${escapeHTML(b.raw)}</h3>`);
      return;
    }
    if (b.type === "res-title") {
      flushResources(); // por si acaso
      // el título se renderiza dentro del contenedor al flush; lo ignoramos aquí
      return;
    }
    if (b.type === "res-item") {
      resourceBuffer.push(b.raw);
      return;
    }
    if (b.type === "text-group") {
      flushResources();
      // Manejo de negritas dentro del grupo
      let segment = escapeHTML(b.raw);
      if (!FULL_SENTENCE_ONLY) {
        segment = segment.replace(/\*\*(.+?)\*\*/g, (m, inner) => {
          const clean = inner.trim();
          boldWordCount += clean.split(/\s+/).length;
          return `<strong>${escapeHTML(clean)}</strong>`;
        });
      } else {
        segment = segment.replace(/\*\*(.+?)\*\*/g, "$1");
      }
      htmlParts.push(`<p>${segment}</p>`);
    }
  });
  flushResources();

  const boldRatio = wordCount ? +(boldWordCount / wordCount).toFixed(3) : 0;

  return {
    ...raw,
    wordCount,
    boldRatio,
    rendered: htmlParts
  };
}

function escapeHTML(str) {
  return str
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#39;");
}
function escapeAttr(str){
  return str.replace(/"/g,"&quot;");
}