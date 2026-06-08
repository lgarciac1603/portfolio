export interface BiText {
  es: string;
  en: string;
}

export interface HighlightCard {
  icon: string;
  title: BiText;
  desc: BiText;
}

export interface CaseStudyData {
  projectId: string;
  overview: BiText;
  highlights: HighlightCard[];
  challenges: BiText[];
  learnings: BiText[];
}

export const caseStudies: CaseStudyData[] = [
  {
    projectId: "cryptoDashboard",
    overview: {
      es: "Portfolio full stack construido con Angular 20, NgRx y ECharts en el frontend, complementado por tres microservicios backend en C++, Go y Rust. La arquitectura se orquesta con Docker Compose usando Nginx como reverse proxy, PostgreSQL como base de datos y Redis para caché. Los datos de mercado provienen de la API de CoinGecko con una estrategia de caché en dos capas para minimizar llamadas externas.",
      en: "Full-stack portfolio built with Angular 20, NgRx and ECharts on the frontend, complemented by three backend microservices in C++, Go and Rust. The architecture is orchestrated with Docker Compose using Nginx as a reverse proxy, PostgreSQL as the database and Redis for caching. Market data comes from the CoinGecko API with a two-layer caching strategy to minimize external calls.",
    },
    highlights: [
      {
        icon: "⚡",
        title: { es: "Caché en dos capas", en: "Two-layer cache" },
        desc: {
          es: "Caché en memoria en el frontend (TTL 2–5 min) con deduplicación de requests inflight + Redis en el backend para reducir llamadas a CoinGecko.",
          en: "In-memory cache on the frontend (2–5 min TTL) with inflight request deduplication + Redis on the backend to reduce CoinGecko API calls.",
        },
      },
      {
        icon: "🔐",
        title: { es: "Auth JWT con auto-refresh", en: "JWT auth with auto-refresh" },
        desc: {
          es: "Interceptor Angular que adjunta el Bearer token y renueva la sesión automáticamente al recibir un 401, sin interrumpir el flujo del usuario.",
          en: "Angular interceptor that attaches the Bearer token and automatically renews the session on 401, without interrupting the user flow.",
        },
      },
      {
        icon: "💱",
        title: { es: "Multi-divisa", en: "Multi-currency" },
        desc: {
          es: "10 monedas soportadas (USD, EUR, GBP, JPY…) con caché separada por divisa en NgRx para evitar mezclar datos entre monedas.",
          en: "10 supported currencies (USD, EUR, GBP, JPY…) with separate NgRx cache per currency to avoid mixing data between currencies.",
        },
      },
      {
        icon: "📈",
        title: { es: "Gráficas interactivas", en: "Interactive charts" },
        desc: {
          es: "ECharts con 5 períodos de tiempo (1h, 24h, 7d, 30d, 1y) con datos históricos de CoinGecko y actualización automática cada 30 segundos.",
          en: "ECharts with 5 time periods (1h, 24h, 7d, 30d, 1y) with historical CoinGecko data and automatic updates every 30 seconds.",
        },
      },
      {
        icon: "🔧",
        title: { es: "Microservicios políglotas", en: "Polyglot microservices" },
        desc: {
          es: "Tres backends independientes: C++ para auth/JWT, Go para favoritos y Rust para el proxy de caché, orquestados con Docker Compose.",
          en: "Three independent backends: C++ for auth/JWT, Go for favorites and Rust for the cache proxy, orchestrated with Docker Compose.",
        },
      },
      {
        icon: "🗂️",
        title: { es: "Estado con NgRx", en: "NgRx state management" },
        desc: {
          es: "Effects para llamadas asíncronas, selectors con memoización por divisa y acciones tipadas con TypeScript en modo estricto.",
          en: "Effects for async calls, selectors with per-currency memoization and actions typed with strict TypeScript.",
        },
      },
    ],
    challenges: [
      {
        es: "Coordinar tres backends en lenguajes distintos (C++, Go, Rust) con contratos REST bien definidos y exponerlos bajo un único reverse proxy Nginx con rutas separadas.",
        en: "Coordinating three backends in different languages (C++, Go, Rust) with well-defined REST contracts and exposing them under a single Nginx reverse proxy with separate routes.",
      },
      {
        es: "Implementar deduplicación de requests en el frontend para evitar múltiples llamadas simultáneas al mismo endpoint durante la carga inicial de la app.",
        en: "Implementing request deduplication on the frontend to avoid multiple simultaneous calls to the same endpoint during the app's initial load.",
      },
      {
        es: "Diseñar el interceptor JWT para manejar la renovación del token de forma transparente: detectar el 401, refrescar sin duplicar solicitudes y reintentar la llamada original.",
        en: "Designing the JWT interceptor to transparently handle token renewal: detect the 401, refresh without duplicating requests and retry the original call.",
      },
    ],
    learnings: [
      {
        es: "Orquestación de microservicios con Docker Compose: healthchecks, redes bridge y configuración de Nginx como reverse proxy para múltiples servicios backend.",
        en: "Microservices orchestration with Docker Compose: healthchecks, bridge networks and Nginx configuration as a reverse proxy for multiple backend services.",
      },
      {
        es: "Gestión de estado compleja con NgRx: effects para concurrencia y cancelación de requests, selectors con memoización y caché por divisa.",
        en: "Complex state management with NgRx: effects for concurrency and request cancellation, selectors with memoization and per-currency cache.",
      },
      {
        es: "Estrategia de caché en dos capas para reducir costos de API y mejorar la latencia percibida, con TTLs diferenciados según el tipo de dato.",
        en: "Two-layer caching strategy to reduce API costs and improve perceived latency, with differentiated TTLs based on data type.",
      },
      {
        es: "Angular 20 Standalone Components: arquitectura modular sin NgModule, con providers en app.config.ts y rutas protegidas por guards tipados.",
        en: "Angular 20 Standalone Components: modular architecture without NgModule, with providers in app.config.ts and routes protected by typed guards.",
      },
    ],
  },
  {
    projectId: "portfolio",
    overview: {
      es: "Portfolio personal construido con React 19, React Router v7 y TailwindCSS. Incluye un sistema de i18n propio sin dependencias externas, animaciones con Framer Motion y case studies técnicos por proyecto. Desplegado en GitHub Pages con routing SPA configurado mediante basename y un 404.html de redirección.",
      en: "Personal portfolio built with React 19, React Router v7 and TailwindCSS. Includes a custom i18n system with no external dependencies, Framer Motion animations and per-project technical case studies. Deployed to GitHub Pages with SPA routing configured via basename and a 404.html redirect.",
    },
    highlights: [
      {
        icon: "🌐",
        title: { es: "i18n propio sin dependencias", en: "Custom i18n, no dependencies" },
        desc: {
          es: "Context API + localStorage para ES/EN. Claves tipadas con TypeScript para detectar traducciones faltantes en tiempo de compilación.",
          en: "Context API + localStorage for ES/EN. TypeScript-typed keys to catch missing translations at compile time.",
        },
      },
      {
        icon: "📋",
        title: { es: "Case studies extensibles", en: "Extensible case studies" },
        desc: {
          es: "Datos en `caseStudies.ts` con objetos bilingüe `{ es, en }`. Añadir un proyecto nuevo es solo añadir un objeto al array.",
          en: "Data in `caseStudies.ts` with bilingual `{ es, en }` objects. Adding a new project is just adding an object to the array.",
        },
      },
      {
        icon: "✨",
        title: { es: "Stagger con Framer Motion", en: "Framer Motion stagger" },
        desc: {
          es: "Variantes `custom` para stagger controlado por índice. Animaciones de entrada suaves sin CSS manual.",
          en: "`custom` variants for index-controlled stagger. Smooth entrance animations without manual CSS.",
        },
      },
      {
        icon: "🚀",
        title: { es: "GitHub Pages + SPA routing", en: "GitHub Pages + SPA routing" },
        desc: {
          es: "basename='/portfolio' en BrowserRouter + redirect desde 404.html para que las rutas directas no devuelvan un 404 real.",
          en: "basename='/portfolio' in BrowserRouter + redirect from 404.html so direct URL navigation doesn't return a real 404.",
        },
      },
    ],
    challenges: [
      {
        es: "Diseñar un sistema i18n sin librerías externas que fuera type-safe: la solución fue tipar el union de claves en TypeScript mientras `t()` acepta `string` en runtime para mantener flexibilidad.",
        en: "Designing a type-safe i18n system without external libraries: the solution was typing the key union in TypeScript while keeping `t()` accepting `string` at runtime for flexibility.",
      },
      {
        es: "Estructurar los datos del case study para ser reutilizables entre proyectos sin hardcodear contenido en el componente, manteniendo soporte bilingüe.",
        en: "Structuring case study data to be reusable across projects without hardcoding content in the component, while maintaining bilingual support.",
      },
    ],
    learnings: [
      {
        es: "Context API es suficiente para i18n simple: evita la complejidad de i18next cuando el alcance y el número de idiomas son reducidos.",
        en: "Context API is enough for simple i18n: avoids i18next complexity when the scope and number of languages are small.",
      },
      {
        es: "Framer Motion `custom` variants permiten stagger controlado por índice sin lógica JavaScript extra en el componente.",
        en: "Framer Motion `custom` variants allow index-controlled stagger without extra JavaScript logic in the component.",
      },
      {
        es: "GitHub Pages con React Router requiere configurar tanto el basename como el 404.html para que el refresco directo en rutas anidadas no rompa la navegación.",
        en: "GitHub Pages with React Router requires configuring both the basename and 404.html so direct refresh on nested routes doesn't break navigation.",
      },
    ],
  },
];
