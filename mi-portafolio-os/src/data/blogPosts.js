export const blogPosts = [
  // NUEVO POST pasa a ser el primero (id:1). Eliminamos el antiguo post de marca (antes id:3) para evitar slug duplicado.
  {
    id: 1,
    slug: "como-soy-como-marca",
    keywords: ["marca personal", "personal brand", "tecnología con propósito", "technology with purpose"],
    pattern: "F",
    highlightSentences: [
      "Mi marca personal nace en la intersección entre tecnología y humanidad.",
      "My personal brand is born at the intersection between technology and humanity.",
      "Mi compromiso es seguir creando soluciones que inspiren y conecten.",
      "My commitment is to continue creating solutions that inspire and connect."
    ],
    links: {
      internal: [
        { label: "Mi Portafolio", to: "desktop-os-portfolio" }
      ],
      external: [
        { label: "Tendencias globales en tecnología con propósito", href: "https://www.un.org/es/un75/impact-digital-technologies" },
        { label: "UX y Dev con propósito", href: "https://medium.com/design-bootcamp/making-technology-work-for-everyone-with-assistive-tech-in-ux-f017ae6e20e0" }
      ]
    },
    cta: {
      text: {
        en: "Discover my vision and how I combine logic with empathy.",
        es: "Descubre mi visión y cómo combino la lógica con la empatía."
      },
      url: "https://github.com/Vann06/portfolio-vianka"
    },
    title: {
      en: "How I Am as a Brand: Technology with Purpose",
      es: "Cómo soy como marca: Tecnología con propósito"
    },
    summary: {
      en: "My personal brand combines logic, creativity, and empathy to create technology that matters.",
      es: "Mi marca personal combina lógica, creatividad y empatía para crear tecnología que importa."
    },
    content: {
      en: `**The way you work is your calling card.** It's not just about what you do, but **how you do it** and the impact you create. In my case, my personal brand is born at the **intersection between technology and humanity**, combining logic, creativity, and empathy to create purposeful solutions.

From my experience in **Computer Science**, I've learned that a system is not only measured by its efficiency, but by **how it transforms the life of the person who uses it**. For me, each project is a bridge between the technical and the human. I don't just want something to work: I want it to **connect, inspire, and leave a mark**.

## My essence as a brand
**Listening before proposing** is one of my key values. I believe every solution starts by understanding context, people, and real needs. This strategic vision lets me **design scalable and sustainable projects** without losing sight of user experience.

My approach blends **technical rigor** with **creative intuition**. That means I can **structure complex ideas** and turn them into clear, elegant, usable experiences. As a brand I convey **trust, vision, and commitment to quality**.

## What sets me apart

## Human perspective
I prioritize user experience in every decision. Technology should feel like it “gets” the person using it.

## Long-term vision
I design solutions that work today and evolve tomorrow without losing clarity or quality.

## Balance: analysis + empathy
Logic guides structure; empathy guides relevance. That mix makes solutions meaningful.

## Synthesis
These pillars allow me to **create technology that matters**. I don’t build just to build: every line of code fits a **greater purpose**.

## The impact I aim to create
My goal is not only to deliver a functional product, but to ensure **the person using it feels it was designed for them**. When technology is empathetic, **it builds trust and loyalty**. That is the mark I want to leave.

I want my work recognized not only for what it does, but for the **experience and emotional value** it delivers. That is the promise of my personal brand: **uniting technical precision with human sensitivity**.

**Building a personal brand is a journey.** Every project, interaction, and decision is part of that narrative.

**My commitment is to continue creating solutions that inspire and connect**, because the best brand is the one that leaves a story worth remembering.

También puedes leer:
- [Portfolio Repository](https://github.com/Vann06/portfolio-vianka)
- [Global trends in technology with purpose](https://www.un.org/es/un75/impact-digital-technologies)`,
      es: `**La forma en la que trabajas es tu carta de presentación.** No se trata solo de lo que haces, sino de **cómo lo haces** y el impacto que generas. Mi marca personal nace en la **intersección entre tecnología y humanidad**, combinando lógica, creatividad y empatía para crear soluciones con propósito.

Desde mi experiencia en **Computer Science**, he aprendido que un sistema no se mide solo por su eficiencia, sino por **cómo transforma la vida de quien lo utiliza**. Cada proyecto es un puente entre lo técnico y lo humano. No quiero solo que funcione: quiero que **conecte, inspire y deje huella**.

## Mi esencia como marca
**Escuchar antes de proponer** es un valor clave. Toda solución parte de comprender contexto, personas y necesidades reales. Esa mirada estratégica me permite **diseñar proyectos escalables y sostenibles** sin perder la experiencia del usuario.

Mi enfoque combina **rigor técnico** con **intuición creativa**. Puedo **estructurar ideas complejas** y convertirlas en experiencias claras, elegantes y usables. Como marca transmito **confianza, visión y compromiso con la calidad**.

## Lo que me diferencia

## Perspectiva humana
Priorizo siempre la experiencia de la persona que interactúa con la solución.

## Visión a largo plazo
Pienso en cómo el producto evoluciona sin romper su coherencia.

## Equilibrio análisis / empatía
La lógica estructura; la empatía le da sentido y conexión emocional.

## Síntesis
Estos pilares me permiten **crear tecnología que importa**. No desarrollo por desarrollar: cada línea responde a un **objetivo mayor**.

## Impacto que busco generar
Mi meta no es solo entregar un producto funcional, sino lograr que **quien lo use sienta que fue diseñado para él**. Cuando la tecnología es empática, **genera confianza y fidelidad**. Esa es la huella que quiero dejar.

Quiero que mi trabajo se reconozca no solo por lo que hace, sino por la **experiencia y el valor emocional** que entrega. Esa es la promesa: **unir precisión técnica y sensibilidad humana**.

**Construir una marca personal es un camino.** Cada proyecto, interacción y decisión alimenta esa narrativa.

**Mi compromiso es seguir creando soluciones que inspiren y conecten**, porque la mejor marca deja una historia que vale la pena recordar.

También puedes leer:
- [Repositorio del Portafolio](https://github.com/Vann06/portfolio-vianka)
- [Tendencias globales en tecnología con propósito](https://www.un.org/es/un75/impact-digital-technologies)`
    },
    image: "https://res.cloudinary.com/dxjrdqbio/image/upload/v1754626661/yio_vcyu3i.jpg",
    date: "2025-08-07",
    tags: ["Marca Personal", "Personal Brand", "Tecnología", "Technology", "Branding"],
    readTime: "5 min"
  },
  // Re-numero antiguos posts: antes 1→2, 2→3
  {
    id: 2,
    slug: "desktop-os-portfolio",
    keywords: ["react portfolio", "retro desktop", "window system"],
    pattern: "F",
    highlightSentences: [
      "The result is a fully interactive desktop environment where visitors can explore my work in a fun and engaging way!",
      "Uno de los mayores desafíos fue crear un sistema de ventanas realista con ventanas arrastrables, manejo adecuado de z-index y animaciones suaves."
    ],
    links: {
      internal: [{ label: "Mi Viaje Full Stack", to: "post-3" }],
      external: [{ label: "React Docs", href: "https://react.dev" }]
    },
    cta: {
      text: {
        en: "Want to see the code? Explore the repository.",
        es: "¿Quieres ver el código? Explora el repositorio."
      },
      url: "https://github.com/Vianka/portfolio-vianka"
    },
    title: {
      en: "Building My Desktop OS Portfolio",
      es: "Construyendo Mi Portafolio Estilo OS"
    },
    summary: {
      en: "How I created a retro desktop experience with React",
      es: "Cómo creé una experiencia de escritorio retro con React"
    },
    content: {
      en: `In this post, I'll walk you through the process of creating my unique portfolio website that mimics a retro desktop operating system.

The main technologies I used:
- React for the component structure
- CSS for styling and animations
- Context API for state management
- Custom hooks for window management

One of the biggest challenges was creating a realistic window system with draggable windows, proper z-index management, and smooth animations. I also wanted to include sound effects to enhance the retro experience.

The result is a fully interactive desktop environment where visitors can explore my work in a fun and engaging way!`,
      es: `En este post, te guiaré a través del proceso de crear mi sitio web de portafolio único que imita un sistema operativo de escritorio retro.

Las principales tecnologías que utilicé:
- React para la estructura de componentes
- CSS para estilos y animaciones
- Context API para manejo de estado
- Custom hooks para manejo de ventanas

Uno de los mayores desafíos fue crear un sistema de ventanas realista con ventanas arrastrables, manejo adecuado de z-index y animaciones suaves. También quería incluir efectos de sonido para mejorar la experiencia retro.

¡El resultado es un entorno de escritorio completamente interactivo donde los visitantes pueden explorar mi trabajo de manera divertida y atractiva!`
    },
    image: "https://res.cloudinary.com/dxjrdqbio/image/upload/v1748235417/65209107-0a46-47eb-bf66-aca123ef191e.png",
    date: "2025-01-15",
    tags: ["React", "JavaScript", "Portfolio"],
    readTime: "5 min"
  },
  {
    id: 3,
    slug: "full-stack-journey",
    keywords: ["full stack journey", "career growth", "developer path"],
    pattern: "L",
    highlightSentences: [
      "Continuous learning is essential in tech",
      "La experiencia del usuario debe impulsar las decisiones técnicas"
    ],
    links: {
      internal: [{ label: "Desktop OS Portfolio", to: "post-2" }],
      external: [{ label: "Laravel Docs", href: "https://laravel.com" }]
    },
    cta: {
      text: {
        en: "Connect with me on LinkedIn for more insights.",
        es: "Conecta conmigo en LinkedIn para más ideas."
      },
      url: "https://www.linkedin.com/"
    },
    title: {
      en: "My Journey as a Full Stack Developer",
      es: "Mi Viaje como Desarrollador Full Stack"
    },
    summary: {
      en: "From design to development: my path in tech",
      es: "Del diseño al desarrollo: mi camino en tecnología"
    },
    content: {
      en: `Starting as a UX designer, I gradually transitioned into full-stack development. This journey taught me the importance of understanding both user needs and technical implementation.

Key lessons learned:
- User experience should drive technical decisions
- Backend architecture is as important as frontend beauty
- Continuous learning is essential in tech
- Collaboration between design and development teams is crucial

Today, I work with technologies like React, Laravel, Vue.js, and various databases to create complete digital experiences.`,
      es: `Comenzando como diseñador UX, gradualmente hice la transición al desarrollo full-stack. Este viaje me enseñó la importancia de entender tanto las necesidades del usuario como la implementación técnica.

Lecciones clave aprendidas:
- La experiencia del usuario debe impulsar las decisiones técnicas
- La arquitectura backend es tan importante como la belleza frontend
- El aprendizaje continuo es esencial en tecnología
- La colaboración entre equipos de diseño y desarrollo es crucial

Hoy trabajo con tecnologías como React, Laravel, Vue.js y varias bases de datos para crear experiencias digitales completas.`
    },
    image: "https://res.cloudinary.com/dxjrdqbio/image/upload/v1748235417/65209107-0a46-47eb-bf66-aca123ef191e.png",
    date: "2025-01-10",
    tags: ["Career", "Full Stack", "Development"],
    readTime: "4 min"
  }
];
