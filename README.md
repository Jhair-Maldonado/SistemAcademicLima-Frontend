# SistemAcademicLima - Frontend

Este repositorio contiene el submódulo de la interfaz de usuario (Single Page Application) del sistema EduCore AI. Está construido con Angular y diseñado específicamente para consumir la API RESTful del backend desacoplado en Java EE.

## Stack tecnológico

- **Framework principal:** Angular (v16+)
- **Lenguaje:** TypeScript
- **Estilos:** HTML5, SCSS y Tailwind CSS (o Angular Material)
- **Programación reactiva:** RxJS
- **Peticiones HTTP:** HttpClient nativo de Angular

## Entorno de desarrollo local

Para ejecutar este proyecto de manera local, es requisito fundamental contar con **Node.js (versión 18 o superior)** y tener instalado el **Angular CLI**.

### 1) Instalación de dependencias

Clona el repositorio y, desde una terminal ubicada en la raíz de esta carpeta, ejecuta:

```bash
npm install
```

### 2) Servidor de desarrollo

Para levantar la aplicación en modo desarrollo, ejecuta:

```bash
ng serve --open
```

Tu navegador predeterminado se abrirá automáticamente apuntando a:

- http://localhost:4200/

La aplicación cuenta con **Hot Module Replacement (HMR)**, por lo que los cambios se reflejan en tiempo real al guardar archivos fuente.

## Arquitectura de carpetas

El proyecto utiliza una arquitectura **Feature-Driven** (orientada a características) para asegurar un código altamente escalable y modular, separando responsabilidades de forma clara:

```text
src/
├── app/
│   ├── core/                 # Servicios singleton (Auth, API, IA), interceptores HTTP, guards
│   ├── features/            # Módulos principales de la aplicación
│   │   ├── admin/          # Vistas del dashboard de Dirección Institucional
│   │   ├── attendance/    # Vistas de registro de asistencia (Web y Kiosco)
│   │   ├── classroom/     # Vistas de aula virtual, tareas y notas
│   │   └── auth/          # Componentes de login y recuperación de cuenta
│   ├── shared/              # Componentes tontos (dumb components), modales, pipes
│   ├── app-routing.module.ts # Enrutamiento principal de la SPA
│   └── app.component.ts    # Componente raíz
├── assets/                   # Recursos estáticos (imágenes, tipografías, íconos)
└── environments/           # Configuración de variables (URLs de la API en dev/prod)
```

## Convenciones de código y buenas prácticas

Para mantener el estándar del proyecto y evitar errores estructurales, todo nuevo módulo o componente debe generarse obligatoriamente utilizando el CLI de Angular.

### Generar un nuevo componente

```bash
ng generate component features/nombre-modulo/nombre-componente
```

### Generar un nuevo servicio (inyectable a nivel raíz)

```bash
ng generate service core/services/nombre-servicio
```

## Nota importante sobre las APIs

Bajo ninguna circunstancia se deben "quemar" (hardcodear) URLs como `http://localhost:8080/api/...` dentro de los componentes. Todas las llamadas al backend deben realizarse construyendo la ruta a partir de la variable `environment.apiUrl` configurada en la carpeta `environments/`. Esto garantiza que el paso de desarrollo a producción sea transparente.

## Equipo de desarrollo

Proyecto académico de Ingeniería de Software para el curso **Desarrollo Web Integrado** de la Universidad Tecnológica del Perú (UTP):

- **Maldonado Quintana, Jhair Junior**
- **Pajuelo Cárdenas, Joseph Jefferson**
- **Porras Palpa, Jair Alexander**
