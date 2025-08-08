// Mejora: soporta frases completas en negrita y bold inline. Calcula ratio de bold.
export function enrichPost(raw, lang = "es") {
  const text = (raw.content?.[lang] || "").trim();
  const wordCount = text ? text.split(/\s+/).length : 0;

  // Config: si quieres solo frases completas en bold, pon true
  const FULL_SENTENCE_ONLY = false;

  // 1. Dividir en “sentencias” básicas (permitimos saltos de línea como separadores suaves)
  const sentences = text
    .split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ0-9])|[\r\n]{2,}/u)
    .map(s => s.trim())
    .filter(Boolean);

  const warnings = [];
  let boldWordCount = 0;

  const processed = sentences.map(original => {
    let s = original;
    const wordLen = s.split(/\s+/).length;
    if (wordLen > 20) warnings.push(`>20 palabras: "${s.slice(0,70)}..." (${wordLen})`);

    // Detecta si TODA la sentencia está envuelta en ** ... **
    let fullBold = false;
    if (/^\*\*(.+)\*\*$/.test(s)) {
      fullBold = true;
      s = s.replace(/^\*\*(.+)\*\*$/, "$1").trim();
    }

    // Escapar HTML
    let escaped = escapeHTML(s);

    // Si se permite inline bold (FULL_SENTENCE_ONLY = false) procesar **texto**
    if (!FULL_SENTENCE_ONLY) {
      escaped = escaped.replace(/\*\*(.+?)\*\*/g, (m, inner) => {
        const clean = inner.trim();
        boldWordCount += clean.split(/\s+/).length;
        return `<strong>${escapeHTML(clean)}</strong>`;
      });
    } else {
      // Si estamos en modo solo-frases, eliminamos cualquier inline para evitar basura
      escaped = escaped.replace(/\*\*(.+?)\*\*/g, "$1");
    }

    // Si la sentencia completa era bold, envolver TODO
    if (fullBold) {
      boldWordCount += wordLen;
      escaped = `<strong>${escaped}</strong>`;
    }

    return { html: escaped, raw: original };
  });

  // 2. Agrupar en párrafos (heurística aproximada 80–110 palabras)
  const paragraphs = [];
  let bucket = [];
  let acc = 0;
  processed.forEach(p => {
    const w = p.raw.split(/\s+/).length;
    bucket.push(p.html);
    acc += w;
    if (acc >= 85) {
      paragraphs.push(bucket.join(" "));
      bucket = [];
      acc = 0;
    }
  });
  if (bucket.length) paragraphs.push(bucket.join(" "));

  const boldRatio = wordCount ? +(boldWordCount / wordCount).toFixed(3) : 0;

  if (warnings.length) {
    console.warn(`[formatPost] Frases largas slug=${raw.slug} lang=${lang}`, warnings);
  }
  if (wordCount < 400 || wordCount > 600) {
    console.warn(`[formatPost] Extensión fuera de 400-600 (${wordCount}) slug=${raw.slug} lang=${lang}`);
  }
  console.log(`[formatPost] slug=${raw.slug} lang=${lang} words=${wordCount} boldWords=${boldWordCount} ratio=${boldRatio}`);

  // Si había ** en el texto y no resultó ningún <strong>, avisa
  if (text.includes("**") && !paragraphs.some(p => p.includes("<strong>"))) {
    console.warn(`[formatPost] Advertencia: se detectaron ** pero no se renderizó ninguna negrita. Revisa espacios o cierres en slug=${raw.slug} lang=${lang}`);
  }

  return {
    ...raw,
    wordCount,
    boldRatio,
    rendered: paragraphs
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