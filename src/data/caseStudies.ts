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
        title: {
          es: "Auth JWT con auto-refresh",
          en: "JWT auth with auto-refresh",
        },
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
        title: {
          es: "Microservicios políglotas",
          en: "Polyglot microservices",
        },
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
        title: {
          es: "i18n propio sin dependencias",
          en: "Custom i18n, no dependencies",
        },
        desc: {
          es: "Context API + localStorage para ES/EN. Claves tipadas con TypeScript para detectar traducciones faltantes en tiempo de compilación.",
          en: "Context API + localStorage for ES/EN. TypeScript-typed keys to catch missing translations at compile time.",
        },
      },
      {
        icon: "📋",
        title: {
          es: "Case studies extensibles",
          en: "Extensible case studies",
        },
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
        title: {
          es: "GitHub Pages + SPA routing",
          en: "GitHub Pages + SPA routing",
        },
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
  {
    projectId: "cppRestApi",
    overview: {
      es: "Backend en C++ para Crypto-Dashboard responsable de autenticación JWT, gestión de sesiones y protección de endpoints. Implementado con bibliotecas modernas de C++ y PostgreSQL, expone un conjunto de rutas REST seguras para login, refresh token y validación de sesión.",
      en: "C++ backend for Crypto-Dashboard responsible for JWT authentication, session management, and endpoint protection. Built with modern C++ libraries and PostgreSQL, it exposes secure REST routes for login, refresh token and session validation.",
    },
    highlights: [
      {
        icon: "🔐",
        title: {
          es: "JWT seguro con refresh tokens",
          en: "Secure JWT with refresh tokens",
        },
        desc: {
          es: "Tokens de acceso con expiración corta y refresh tokens gestionados en backend para minimizar riesgos y permitir renovaciones sin pedir credenciales nuevamente.",
          en: "Short-lived access tokens and refresh tokens managed by the backend to minimize risk and allow renewals without requesting credentials again.",
        },
      },
      {
        icon: "⚙️",
        title: { es: "REST API robusta en C++", en: "Robust C++ REST API" },
        desc: {
          es: "Rutas REST tipadas con middleware de autorización, parsing de JSON y manejo de errores para validar credenciales, sesiones y permisos de usuario.",
          en: "Typed REST routes with authorization middleware, JSON parsing and error handling to validate credentials, sessions and user permissions.",
        },
      },
      {
        icon: "🗄️",
        title: {
          es: "Persistencia con PostgreSQL",
          en: "PostgreSQL persistence",
        },
        desc: {
          es: "Modelo relacional para usuarios, sesiones y refresh tokens con índices adecuados para autenticar rápido y registrar actividad de sesión.",
          en: "Relational model for users, sessions and refresh tokens with proper indexes for fast authentication and session activity tracking.",
        },
      },
      {
        icon: "🐳",
        title: {
          es: "Dockerización end-to-end",
          en: "End-to-end Dockerization",
        },
        desc: {
          es: "Imagen de C++ construida con multi-stage build, conectada a PostgreSQL y expuesta como servicio independiente dentro de Docker Compose.",
          en: "C++ image built with a multi-stage build, connected to PostgreSQL and exposed as an independent service within Docker Compose.",
        },
      },
    ],
    challenges: [
      {
        es: "Garantizar la seguridad del flujo de autenticación JWT y refresh token sin introducir condiciones de carrera ni duplicar sesiones.",
        en: "Ensuring the security of the JWT and refresh token authentication flow without introducing race conditions or session duplication.",
      },
      {
        es: "Diseñar la API para integrarse correctamente con el frontend Angular y el reverse proxy, manteniendo rutas limpias y respuestas consistentes.",
        en: "Designing the API to integrate correctly with the Angular frontend and reverse proxy, keeping clean routes and consistent responses.",
      },
      {
        es: "Manejar errores y conexiones a la base de datos en C++ de forma segura, evitando fugas de memoria y asegurando una experiencia estable bajo carga.",
        en: "Handling errors and database connections in C++ safely, avoiding memory leaks and ensuring a stable experience under load.",
      },
    ],
    learnings: [
      {
        es: "Construir APIs REST en C++ exige atención al detalle en parsing, manejo de errores y gestión de recursos, pero permite entregar servicios muy eficientes.",
        en: "Building REST APIs in C++ requires attention to detail in parsing, error handling and resource management, but enables highly efficient services.",
      },
      {
        es: "La separación entre auth service y frontend reduce la superficie de ataque y facilita el mantenimiento de las reglas de seguridad.",
        en: "Separating auth service from the frontend reduces attack surface and makes security rules easier to maintain.",
      },
      {
        es: "Docker multi-stage optimiza imágenes C++ grandes, permitiendo un despliegue más ligero sin el toolchain presente en el runtime.",
        en: "Docker multi-stage optimizes large C++ images, enabling lighter deployment without the toolchain present at runtime.",
      },
      {
        es: "Integrar PostgreSQL con un backend C++ robusto mostró la importancia de transacciones claras y una capa de datos bien definida.",
        en: "Integrating PostgreSQL with a robust C++ backend showed the importance of clear transactions and a well-defined data layer.",
      },
    ],
  },
  {
    projectId: "favoritesApi",
    overview: {
      es: "Microservicio en Go para Crypto-Dashboard que administra la lista de favoritos del usuario y persiste preferencias en PostgreSQL. Diseñado para responder en milisegundos y mantener un modelo de datos ligero para sincronizarse con el frontend de forma eficiente.",
      en: "Go microservice for Crypto-Dashboard that manages the user's favorites list and persists preferences in PostgreSQL. Designed to respond in milliseconds and keep a lightweight data model to sync efficiently with the frontend.",
    },
    highlights: [
      {
        icon: "⭐",
        title: { es: "Favoritos persistentes", en: "Persistent favorites" },
        desc: {
          es: "Estructura de datos mínima para favoritos que prioriza consultas rápidas y evita joins complejos en PostgreSQL.",
          en: "Minimal favorites data structure that prioritizes fast queries and avoids complex joins in PostgreSQL.",
        },
      },
      {
        icon: "🔄",
        title: { es: "Sincronización eficiente", en: "Efficient sync" },
        desc: {
          es: "Endpoints REST simples para añadir/quitar favoritos, diseñados para integrarse con el frontend Angular sin latencia perceptible.",
          en: "Simple REST endpoints for adding/removing favorites, designed to integrate with the Angular frontend with imperceptible latency.",
        },
      },
      {
        icon: "🛡️",
        title: { es: "Validación de usuario", en: "User validation" },
        desc: {
          es: "Middleware que verifica el JWT de sesión antes de cada operación, asegurando que solo el usuario correcto pueda modificar su lista de favoritos.",
          en: "Middleware that verifies the session JWT before each operation, ensuring only the correct user can modify their favorites list.",
        },
      },
      {
        icon: "🧪",
        title: { es: "Pruebas de integridad", en: "Integrity testing" },
        desc: {
          es: "Checks de integridad en el backend para manejar entradas duplicadas, eliminar favoritos inexistentes y mantener la consistencia de la base de datos.",
          en: "Backend integrity checks to handle duplicate inputs, remove nonexistent favorites, and keep database consistency.",
        },
      },
    ],
    challenges: [
      {
        es: "Mantener la lista de favoritos consistente cuando múltiples dispositivos del mismo usuario realizan cambios simultáneos.",
        en: "Keeping the favorites list consistent when multiple devices of the same user make changes simultaneously.",
      },
      {
        es: "Diseñar la API para que fuese ligera y segura, sin exponer datos de otros usuarios en las respuestas.",
        en: "Designing the API to be lightweight and secure, without exposing data from other users in responses.",
      },
      {
        es: "Asegurar que las operaciones de escritura en PostgreSQL eran transaccionales y reversibles ante datos inválidos.",
        en: "Ensuring PostgreSQL writes were transactional and reversible in the face of invalid data.",
      },
    ],
    learnings: [
      {
        es: "Un microservicio ligero para favoritos es ideal cuando la interfaz demanda respuestas rápidas y cambios frecuentes en el estado del usuario.",
        en: "A lightweight favorites microservice is ideal when the UI demands fast responses and frequent user state changes.",
      },
      {
        es: "Validar el JWT en cada solicitud evita fugas de datos entre usuarios y mantiene la confianza en la API.",
        en: "Validating the JWT on every request prevents data leaks between users and maintains trust in the API.",
      },
      {
        es: "Diseñar el modelo relacional pensando en consultas de lectura frecuentes reduce la complejidad y mejora la latencia.",
        en: "Designing the relational model with frequent read queries in mind reduces complexity and improves latency.",
      },
    ],
  },
  {
    projectId: "cacheProxyApi",
    overview: {
      es: "Proxy de caché en Rust para Crypto-Dashboard que añade Redis delante de la API de CoinGecko. Su función es reducir llamadas externas y servir datos de mercado frescos a través de un endpoint intermedio seguro.",
      en: "Rust cache proxy for Crypto-Dashboard that adds Redis in front of the CoinGecko API. Its role is to reduce external calls and serve fresh market data through a secure intermediate endpoint.",
    },
    highlights: [
      {
        icon: "🧠",
        title: { es: "Caché en Redis", en: "Redis cache" },
        desc: {
          es: "Datos de mercado cacheados con TTL configurable para balancear frescura y eficiencia de llamadas a CoinGecko.",
          en: "Market data cached with configurable TTL to balance freshness and CoinGecko call efficiency.",
        },
      },
      {
        icon: "⚡",
        title: { es: "Latencia reducida", en: "Reduced latency" },
        desc: {
          es: "Respuestas servidas desde Redis cuando los datos están disponibles, evitando la latencia de la API externa en cada carga de la app.",
          en: "Responses served from Redis when data is available, avoiding external API latency on every app load.",
        },
      },
      {
        icon: "🛡️",
        title: { es: "Protección de endpoints", en: "Endpoint protection" },
        desc: {
          es: "Control de acceso y validación básica añadidos al proxy para evitar uso indebido del endpoint intermedio.",
          en: "Access control and basic validation added to the proxy to prevent misuse of the intermediate endpoint.",
        },
      },
      {
        icon: "📦",
        title: { es: "Rust seguro y eficiente", en: "Safe, efficient Rust" },
        desc: {
          es: "Uso de Rust para evitar errores comunes de memoria y ofrecer un servicio de proxy de alta concurrencia.",
          en: "Using Rust to avoid common memory errors and deliver a high-concurrency proxy service.",
        },
      },
    ],
    challenges: [
      {
        es: "Mantener la validez de caché correcta para datos de mercado que cambian con frecuencia, sin servir información obsoleta al usuario.",
        en: "Keeping cache validity correct for market data that changes frequently, without serving stale information to the user.",
      },
      {
        es: "Sincronizar la lógica del proxy con el frontend para que las rutas de datos no rompan cuando el servicio cacheado está estado en Redis.",
        en: "Syncing proxy logic with the frontend so data routes do not break when the cached service is in Redis.",
      },
      {
        es: "Evitar peticiones innecesarias a CoinGecko mientras se mantiene un TTL lo suficientemente corto para que los usuarios vean precios recientes.",
        en: "Avoiding unnecessary CoinGecko requests while keeping TTL short enough for users to see recent prices.",
      },
    ],
    learnings: [
      {
        es: "Un proxy de caché bien diseñado reduce significativamente la carga en APIs externas y mejora la experiencia de usuario.",
        en: "A well-designed cache proxy significantly reduces load on external APIs and improves user experience.",
      },
      {
        es: "Redis es ideal para datos de mercado temporales, siempre que el TTL y la invalidación estén bien calibrados.",
        en: "Redis is ideal for temporary market data when TTL and invalidation are well calibrated.",
      },
      {
        es: "Rust facilita construir servicios de proxy de alto rendimiento sin renunciar a seguridad de memoria.",
        en: "Rust makes it easy to build high-performance proxy services without sacrificing memory safety.",
      },
    ],
  },
];
