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
];
