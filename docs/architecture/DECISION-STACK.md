# Decisión de stack — Kintsugi Studio Web

> **Estado: decidida.** Fecha: 7 de noviembre de 2026.
> **Opción elegida: B — Django 5.2 + DRF + Next.js + PostgreSQL + Django Admin/Unfold.**
>
> La decisión se basa en las respuestas del cliente recogidas en
> [`RESPUESTAS-CLIENTE.md`](../discovery/RESPUESTAS-CLIENTE.md).

## 1. Contexto

Kintsugi Studio necesita una web pública que transmita su identidad de lujo y un panel interno
para operar la agenda, el CRM y el ERP ligero del salón. El equipo es de **dos personas**, el
presupuesto es bajo y el cliente espera el núcleo operativo en aproximadamente un mes.

El volumen es de **200–230 clientes al mes** (8–10 citas por día). No se requiere escalabilidad
extrema: la prioridad es **correctitud, facilidad de uso y velocidad de entrega**.

## 2. Requisitos que condicionan la tecnología

| Requisito confirmado | Implicación técnica |
|---|---|
| Sitio público con marca e información | Frontend con SEO, rendimiento y diseño responsive. |
| Reserva real con disponibilidad por profesional | Motor de disponibilidad transaccional y base relacional. |
| Integración con calendario, WhatsApp y pasarela | APIs HTTP del lado del servidor y webhooks. |
| Roles operario, administrador y profesional | Permisos por rol y por objeto. |
| 2FA para admin/operario y auditoría interna | Paquetes maduros de autenticación y auditoría. |
| CRM: historial, fotos, fórmulas, duplicados, segmentación | Modelo relacional, almacenamiento de archivos y búsquedas. |
| ERP: caja, gastos, comisiones, proveedores, inventario, reportes | Back-office rápido y consultas agregadas. |
| Varios usuarios, móvil y computador | Web responsive; no se necesita app nativa. |
| Lanzamiento en ~1 mes | El admin preconstruido vale más que la optimización prematura. |
| Presupuesto bajo | Capas gratuitas y despliegue gestionado. |
| Capacitación a administradores y profesionales | Interfaz interna simple y consistente. |

## 3. Opciones evaluadas

### A. Django + DRF + React (Vite) + PostgreSQL + Django Admin/Unfold

- **Pros:** admin listo desde el día 1; auth, roles, 2FA y auditoría maduros; el equipo ya conoce
  el stack; integraciones sencillas; excelente para POO y patrones.
- **Contras:** SPA con SEO más débil; el admin no es 100 % marca; hay que construir el portal del
  profesional.
- **Cuándo:** si se prioriza la velocidad y el SEO no es crítico.

### B. Django + DRF + Next.js + PostgreSQL + Django Admin/Unfold — **elegida**

- **Pros:** todo lo de A, más SEO y rendimiento del sitio público con server-side rendering;
  React moderno; el backend no cambia.
- **Contras:** una capa más que aprender (SSR, server components); dos despliegues.
- **Cuándo:** cuando el sitio público es la cara del negocio y debe posicionar.

### C. Next.js full-stack + Prisma + PostgreSQL

- **Pros:** un solo repo y despliegue; SEO excelente; Vercel gratuito; TypeScript en todo.
- **Contras:** el CRM/ERP se construye desde cero; 2FA, auditoría, roles y reportes a mano;
  Prisma no es un ORM orientado a objetos clásico; jobs programados en serverless incómodos.
- **Cuándo:** solo si el producto fuera una web de marketing con reservas simples.

### D. Laravel + Filament + PostgreSQL

- **Pros:** Filament entrega un admin/CRM/ERP espectacular en días; auth, políticas, colas,
  scheduler y auditoría incluidos; hosting barato.
- **Contras:** PHP; si el equipo no lo domina, la curva es alta.
- **Cuándo:** si el equipo ya trabaja con PHP/Laravel.

### E. FastAPI + SQLAlchemy + React + PostgreSQL

- **Pros:** explícito, OpenAPI nativo, async, ideal para integraciones.
- **Contras:** admin, auth, 2FA, auditoría y CRUD se construyen a mano; la opción más lenta para
  un CRM/ERP.
- **Cuándo:** si el proyecto fuera solo API y no necesitara back-office.

### F. Django + HTMX + Alpine + PostgreSQL

- **Pros:** el MVP más rápido; un solo despliegue; SEO nativo; admin incluido.
- **Contras:** menos interactividad en la reserva; se desaprovecha la experiencia en React.
- **Cuándo:** si el plazo de un mes es innegociable y se recorta el alcance.

## 4. Matriz de decisión

| Criterio | Peso | A | B | C | D | E | F |
|---|---:|---:|---:|---:|---:|---:|---:|
| Velocidad del back-office CRM/ERP | 25 % | 5 | 5 | 2 | 5 | 1.5 | 5 |
| Reserva, calendario, WhatsApp, pagos | 20 % | 5 | 5 | 3.5 | 4.5 | 5 | 4.5 |
| Seguridad, roles, 2FA, auditoría | 15 % | 5 | 5 | 2.5 | 4.5 | 2.5 | 5 |
| Sitio público / SEO / UX | 15 % | 3 | 5 | 5 | 3.5 | 3 | 4.5 |
| Mantenibilidad, POO, patrones, pruebas | 10 % | 5 | 5 | 3 | 4 | 4 | 4.5 |
| Curva de aprendizaje del equipo | 10 % | 5 | 3.5 | 4 | 2 | 4 | 3.5 |
| Costo y simplicidad de despliegue | 5 % | 4 | 4 | 5 | 4.5 | 4 | 5 |
| **Total ponderado** | **100 %** | **4.65** | **4.80** | **3.28** | **4.18** | **3.20** | **4.63** |

## 5. Decisión

**Opción B: Django 5.2 + DRF + Next.js + PostgreSQL + Django Admin/Unfold.**

Razones:

1. **El negocio es un back-office con una web encima.** La agenda, los clientes, la caja, las
   comisiones, el inventario y los proveedores son el núcleo. Django Admin los entrega
   funcionando mientras se construye la reserva.
2. **Seguridad y cumplimiento resueltos:** roles, 2FA, auditoría, retención y permisos por
   objeto. En Next.js full-stack o FastAPI habría que construirlos.
3. **Integraciones server-side:** Google Calendar, WhatsApp Cloud API y Wompi/Bold son llamadas
   HTTP con OAuth y webhooks.
4. **SEO del sitio público:** Next.js renderiza en servidor y mejora el posicionamiento de un
   negocio que vive de su presencia digital.
5. **El backend queda desacoplado del frontend:** si en el futuro se cambia Next.js por otra
   tecnología, el dominio y la API no se tocan.

**Descartadas:** C y E no son malos stacks, pero obligan a construir el CRM/ERP desde cero. D
sería la ruta más rápida si el equipo dominara PHP. A y F quedan como alternativas si el plazo
de un mes se vuelve innegociable.

## 6. Configuración concreta

| Capa | Elección |
|---|---|
| Lenguaje backend | Python 3.12 |
| Framework | Django 5.2 LTS + Django REST Framework |
| Autenticación | SimpleJWT para la API + sesión para el admin |
| 2FA | django-otp (TOTP) para administradores y operarios |
| Permisos | Grupos de Django + django-guardian |
| Auditoría | django-simple-history |
| Base de datos | PostgreSQL 16 (Neon/Supabase) |
| Jobs | Redis + Huey |
| Frontend público | Next.js (App Router) + React 19 + TypeScript |
| Estilos | Tailwind CSS + shadcn/ui |
| Datos y formularios | TanStack Query + React Hook Form + Zod |
| Back-office | Django Admin + Unfold |
| Portal del profesional | Next.js: mi agenda, mi historial, recordatorios |
| API | OpenAPI 3 con drf-spectacular |
| Archivos | Cloudflare R2 o Supabase Storage |
| Correo | Resend o Brevo |
| WhatsApp | Meta WhatsApp Cloud API |
| Calendario | Google Calendar API (OAuth 2.0) |
| Pagos | Wompi o Bold (adaptador listo; fase 3) |
| Reportes | ORM + pandas/openpyxl; Metabase opcional |
| Pruebas | pytest, pytest-django, factory_boy, Playwright, Vitest |
| CI/CD | GitHub Actions |
| Despliegue | Vercel + Railway/Render + Neon |
| Contenedores | Docker + docker-compose |
| Observabilidad | Sentry + logs estructurados |

## 7. Arquitectura

Monolito modular con capas y puertos/adaptadores en los bordes:

```
Next.js (sitio público + portal)   Django Admin (back-office)
                    \                 /
                     Django REST API /api/v1
                          |
   identidad · catálogo · agenda · CRM · finanzas · inventario · notificaciones · reportes
                          |
   PostgreSQL · Redis · S3 · Google Calendar · WhatsApp · pasarela · correo
```

**Patrones aplicados**

- **Strategy:** comisión 55 % / 60 %, cálculo de precio y disponibilidad.
- **Factory:** creación de notificaciones por canal.
- **Observer:** eventos de cita que disparan calendario, recordatorios y auditoría.
- **State:** ciclo de vida de la cita.
- **Facade:** `BookingService` como única puerta para agendar, mover y cancelar.
- **Adapter:** pasarela de pago, Google Calendar y WhatsApp.

## 8. Costos estimados

| Servicio | Plan | Costo |
|---|---|---|
| GitHub | Free | USD 0 |
| Vercel | Hobby | USD 0 |
| Railway / Render | Free / Starter | USD 0–7/mes |
| Neon / Supabase | Free | USD 0 |
| Cloudflare R2 | 10 GB gratis | USD 0 |
| Resend / Brevo | Free tier | USD 0 |
| Google Calendar API | Gratis | USD 0 |
| WhatsApp Cloud API | Por conversación | Variable |
| Wompi / Bold | Comisión por transacción | Variable |
| Dominio | Anual | USD 12–30/año |
| Sentry | Free tier | USD 0 |

## 9. Riesgos y mitigación

| Riesgo | Mitigación |
|---|---|
| Curva de Next.js | Empezar por el sitio público y la reserva; el backend no depende del frontend. |
| Dos despliegues | CI/CD separado y variables de entorno documentadas. |
| El cliente espera el ERP completo en un mes | Entregar el núcleo operativo y presentar el roadmap por fases. |
| La pasarela exige documentos legales | Iniciar RUT, cámara de comercio y certificado bancario en paralelo. |
| WhatsApp requiere plantillas aprobadas | Usar correo como respaldo y preparar plantillas con anticipación. |
| El admin se queda corto para reportes | Añadir Metabase o vistas personalizadas cuando haga falta. |

## 10. Decisiones abiertas

- [ ] Confirmar Wompi o Bold como pasarela.
- [ ] Confirmar si el pago en línea y la confirmación automática salen del MVP.
- [ ] Definir si el back-office se queda en Django Admin/Unfold o evoluciona a un panel propio.
- [ ] Confirmar dominio y correo corporativo.
- [ ] Definir la política de cancelación y no-show.
- [ ] Confirmar la retención contable frente al año de retención de datos.
