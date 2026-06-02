SistemAcademicLima - Frontend (Cliente Web)

Este repositorio contiene el submódulo de la interfaz de usuario (Single Page Application) del sistema EduCore AI. Está construida con Angular y diseñada específicamente para consumir la API RESTful del backend desacoplado en Java EE.

🛠️ Stack Tecnológico

Framework Principal: Angular (v16+)

Lenguaje: TypeScript

Estilos: HTML5, SCSS y Tailwind CSS (o Angular Material)

Programación Reactiva: RxJS

Peticiones HTTP: HttpClient nativo de Angular

🚀 Entorno de Desarrollo Local

Para ejecutar este proyecto de manera local, es requisito fundamental contar con Node.js (versión 18 o superior) y tener instalado el Angular CLI (npm install -g @angular/cli).

1. Instalación de dependencias

Clona el repositorio, abre una terminal en la raíz de esta carpeta y ejecuta el siguiente comando para descargar los módulos de Node:

npm install


2. Servidor de Desarrollo

Para levantar la aplicación en modo desarrollo, ejecuta:

ng serve --open


Tu navegador predeterminado se abrirá automáticamente apuntando a http://localhost:4200/. La aplicación cuenta con Hot Module Replacement (HMR), por lo que se recargará en tiempo real al guardar cambios en los archivos fuente.

📁 Arquitectura de Carpetas

El proyecto utiliza una arquitectura Feature-Driven (orientada a características) para asegurar un código altamente escalable y modular, separando las responsabilidades de forma clara:

src/
├── app/
│   ├── core/                 # Servicios singleton (Auth, API, IA), interceptores HTTP, guards
│   ├── features/             # Módulos principales de la aplicación
│   │   ├── admin/            # Vistas del dashboard de Dirección Institucional
│   │   ├── attendance/       # Vistas de registro de asistencia (Web y Kiosco)
│   │   ├── classroom/        # Vistas de aula virtual, tareas y notas
│   │   └── auth/             # Componentes de login y recuperación de cuenta
│   ├── shared/               # Componentes tontos (dumb components), modales, pipes
│   ├── app-routing.module.ts # Enrutamiento principal de la SPA
│   └── app.component.ts      # Componente raíz
├── assets/                   # Recursos estáticos (imágenes, tipografías, íconos)
└── environments/             # Configuración de variables (URLs de la API en dev/prod)


💻 Convenciones de Código y Buenas Prácticas

Para mantener el estándar del proyecto y evitar errores estructurales, todo nuevo módulo o componente debe generarse obligatoriamente utilizando el CLI de Angular:

Para generar un nuevo componente:

ng generate component features/nombre-modulo/nombre-componente


Para generar un nuevo servicio (inyectable a nivel raíz):

ng generate service core/services/nombre-servicio


⚠️ Nota importante sobre las APIs: Bajo ninguna circunstancia se deben "quemar" (hardcodear) URLs como http://localhost:8080/api/... dentro de los componentes. Todas las llamadas al backend deben realizarse construyendo la ruta a partir de la variable environment.apiUrl configurada en la carpeta environments/. Esto garantiza que el paso de Desarrollo a Producción sea transparente.

👥 Equipo de Desarrollo

Proyecto académico de Ingeniería de Software para el curso Desarrollo Web Integrado de la Universidad Tecnológica del Perú (UTP):

Maldonado Quintana, Jhair Junior

Pajuelo Cardenas, Joseph Jefferson

Porras Palpa, Jair Alexander
