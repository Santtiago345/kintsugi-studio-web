# Decisión de stack — Kintsugi Studio Web

> Documento de decisión. Fecha: 6 de noviembre de 2026.
> Estado: **propuesta**, pendiente de confirmar con el equipo (Santiago + David).

## 1. Contexto

Kintsugi Studio necesita una web pública que transmita su identidad de lujo y un panel
interno para operar la agenda del salón. El equipo es de **dos personas**, con presupuesto
casi nulo y un cliente real que debe poder usar el sistema sin fricción.

## 2. Requisitos que condicionan la tecnología

| Requisito del producto | Implicación técnica |
|---|---|
| Sitio público rápido, indexable y mobile-first | Renderizado ligero, SEO, buenas métricas web |
| Reserva en línea con disponibilidad real | API con reglas de negocio y transacciones |
| Agenda por profesional y validación de solapamientos | Modelo relacional + restricciones de integridad |
| Panel para el salón (servicios, horarios, citas, clientes) | Back-office con autenticación y roles |
| Notificaciones de confirmación y recordatorio | Servicio de correo/WhatsApp desacoplable |
| Identidad visual consistente | Sistema de diseño con tokens de marca |
| Operación confiable | Pruebas automatizadas, CI/CD y despliegue reproducible |
| Crecimiento futuro (promociones, multi-sede, pagos) | Arquitectura modular y mantenible |

## 3. Candidatos

### A. Django 5 + Django REST Framework + React (Vite + TypeScript)

- **Backend:** Django + DRF, ORM, migraciones, autenticación, admin, SQLite/PostgreSQL.
- **Frontend:** React 19 + Vite + TypeScript + Tailwind + shadcn/ui.
- **Pruebas:** pytest + pytest-django + coverage; Vitest para el frontend.
- **Deploy:** backend en Railway/Render + PostgreSQL gestionado (Neon/Supabase); frontend en Vercel/Netlify.

**Pros**
- Django Admin entrega el back-office del salón desde el día 1 (servicios, horarios, citas, clientes).
- ORM y migraciones eliminan trabajo repetitivo; autenticación y permisos vienen resueltos.
- Excelente para modelar el dominio con POO y patrones reales.
- Documentación de API automática con drf-spectacular (OpenAPI/Swagger).
- El equipo ya tiene experiencia previa con este stack.

**Contras**
- Dos proyectos que desplegar y CORS que configurar.
- La SPA pierde algo de SEO frente a server-side rendering (se mitiga con metadatos y prerender).
- Django puede sentirse grande para un sitio pequeño.

### B. FastAPI + SQLAlchemy + React

- **Pros:** código explícito, OpenAPI nativo, Pydantic, ideal para arquitectura hexagonal; rápido de leer.
- **Contras:** hay que construir a mano admin, autenticación con roles y CRUDs; más código propio = más tiempo.

### C. Next.js (App Router) + Prisma + PostgreSQL

- **Pros:** un solo repo y deploy, SEO excelente, Vercel gratuito, UI moderna rápida.
- **Contras:** el backend queda mezclado con el frontend (route handlers), lo que difumina capas y patrones; Prisma no es un ORM orientado a objetos clásico.

### D. Node.js + Express + React

- **Pros:** un solo lenguaje (TypeScript), ecosistema enorme.
- **Contras:** hay que armar capas, validación, ORM, auth y admin a mano; más decisiones sueltas y más riesgo.

### E. Django + plantillas + HTMX (sin SPA)

- **Pros:** la ruta más corta a algo funcional, SEO nativo, un solo deploy, admin incluido.
- **Contras:** menos interactividad para la reserva y el panel; el equipo ya viene pensando en React; no separa API y frontend.

## 4. Matriz de decisión

| Criterio | Peso | A Django+React | B FastAPI+React | C Next.js | D Express+React | E Django+HTMX |
|---|---:|---:|---:|---:|---:|---:|
| Velocidad al MVP | 25 % | 4 | 3.5 | 4 | 3 | 5 |
| Calidad técnica (POO, patrones, testabilidad) | 20 % | 5 | 4.5 | 3 | 3.5 | 4.5 |
| Curva de aprendizaje del equipo | 15 % | 3 | 4 | 3 | 4 | 4 |
| Back-office para el salón | 15 % | 5 | 2 | 2 | 1.5 | 5 |
| Costo de despliegue | 10 % | 4 | 4 | 5 | 4 | 5 |
| SEO / rendimiento del sitio público | 10 % | 3 | 3 | 5 | 3 | 5 |
| Escalabilidad y mantenibilidad | 5 % | 4 | 4 | 4 | 3.5 | 4.5 |
| **Total ponderado** | **100 %** | **4.10** | **3.58** | **3.55** | **3.15** | **4.73** |

> E obtiene el mayor puntaje, pero no separa API y frontend. Entre las opciones que sí lo
> hacen, **A es la mejor**.

## 5. Recomendación

**Django 5 + DRF + React (Vite + TypeScript) + PostgreSQL.**

Razones de fondo:

1. **Cumple el producto sin torcerlo:** API REST clara, frontend separado, base relacional, pruebas y CI.
2. **Admin gratis:** el salón necesita operar; Django Admin permite cargar servicios, horarios y citas sin construir un CRUD por cada entidad.
3. **Los patrones resuelven problemas reales**, no son decoración:
   - **Strategy** → política de disponibilidad y cálculo de precio/duración (por servicio, profesional o promoción).
   - **Factory** → creación de notificaciones (correo, WhatsApp, SMS) según preferencia del cliente.
   - **Observer** → eventos de cita (`created`, `confirmed`, `cancelled`) que disparan recordatorios y correos.
   - **State** → ciclo de vida de la cita (`pending → confirmed → completed / cancelled / no_show`).
   - **Facade** → `BookingService` como única puerta de entrada para agendar/cancelar.
4. **El equipo ya conoce el stack:** reduce el riesgo y acelera la primera versión.
5. **Costo:** capas gratuitas (Vercel + Railway/Render + Neon). Solo el dominio tiene costo anual.

### Configuración propuesta

| Capa | Elección |
|---|---|
| Lenguaje backend | Python 3.12 |
| Framework | Django 5.x + Django REST Framework |
| Autenticación | JWT (SimpleJWT) para la API + sesión para el admin |
| Base de datos | SQLite en desarrollo · PostgreSQL 16 en producción y CI |
| Frontend | React 19 + Vite + TypeScript |
| Estilos | Tailwind CSS + shadcn/ui, con los tokens del manual de marca |
| Estado/servidor | TanStack Query + React Hook Form + Zod |
| Documentación API | drf-spectacular (OpenAPI 3 + Swagger UI) |
| Pruebas backend | pytest, pytest-django, factory_boy, coverage ≥ 80 % en dominio |
| Calidad | ruff + black + mypy (backend), ESLint + Prettier (frontend) |
| CI/CD | GitHub Actions: lint → tests → build; deploy del frontend en Vercel |
| Contenedores | Dockerfile + docker-compose (app + Postgres) para reproducibilidad |

### Arquitectura propuesta (borrador)

Monolito modular con arquitectura en capas y puertos/adaptadores en los bordes:

```
frontend (React)
      │ HTTP/JSON
      ▼
API (DRF: viewsets + serializers)   ← capa de presentación
      ▼
Application services (BookingService, CatalogService, NotificationService)
      ▼
Domain (entities, value objects, policies, events)   ← sin imports de Django
      ▼
Infrastructure (Django ORM repositories, email/WhatsApp adapters, tasks)
      ▼
PostgreSQL
```

- **MVC** en el frontend (componentes/vistas, hooks de datos, servicios de API).
- **SOLID** aplicado en servicios y políticas; inyección por constructor.
- **DDD táctico ligero:** entidades `Service`, `Professional`, `Appointment`, `Client`;
  value objects `Money`, `TimeSlot`, `PhoneNumber`; lenguaje ubicuo en inglés.

### Riesgos y mitigación

| Riesgo | Mitigación |
|---|---|
| Sobrecargar el alcance (pagos, multi-sede, chat) | MVP cerrado: catálogo + reserva + confirmación + panel |
| Curva de React/TS en poco tiempo | Componentes shadcn/ui + plantillas; una pantalla a la vez |
| Hosting gratuito con SQLite efímero | PostgreSQL gestionado desde el inicio en producción |
| Patrones "de adorno" | Cada patrón resuelve un problema real y tiene prueba unitaria |
| Documentación al final | Documento vivo en `docs/`, actualizado en cada iteración |

## 6. Costos estimados

| Servicio | Plan | Costo |
|---|---|---|
| GitHub | Free (repo privado, Actions 2.000 min/mes) | USD 0 |
| Vercel / Netlify (frontend) | Hobby | USD 0 |
| Render / Railway (backend) | Free / Starter | USD 0–5/mes |
| Neon / Supabase (PostgreSQL) | Free tier | USD 0 |
| Dominio `.com` / `.co` | Anual | ~USD 12–30/año |
| Correo transaccional (Resend/Brevo) | Free tier (100–300/día) | USD 0 |

## 7. Lo que falta decidir con el cliente

1. ¿La reserva es **online con pago/anticipo** o solo **solicitud que el salón confirma por WhatsApp**?
2. ¿Cuántos profesionales y sedes? ¿La agenda es por profesional, por servicio o por ambos?
3. ¿Se manejan **paquetes, promociones, membresías o bonos**?
4. ¿Recordatorios por **WhatsApp, correo o SMS**? ¿Integración con Google Calendar?
5. ¿Se publican **precios** y **políticas de cancelación**?
6. ¿Quién administra el contenido (servicios, fotos, horarios)? ¿Se necesita panel propio o basta un admin?
7. ¿Dominio y hosting ya existen? ¿Quién los paga?
8. ¿Tratamiento de datos personales (Ley 1581 de 2012) y autorización de imágenes?

## 8. Decisión pendiente

- [ ] Confirmar stack con David (A / B / C / D / E).
- [ ] Confirmar alcance del MVP con el cliente.
- [ ] Crear el proyecto base una vez confirmado.
