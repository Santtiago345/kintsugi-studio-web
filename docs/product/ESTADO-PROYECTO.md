# Estado y rumbo del proyecto — Kintsugi Studio Web

> **Documento maestro de control.** Última actualización: 10 de noviembre de 2026.
> Este documento no reemplaza las fuentes de negocio ni la decisión de stack: las ordena,
> detecta huecos y fija el plan de ejecución.
>
> **Jerarquía de fuentes de verdad**
> 1. Negocio y alcance: [`../README.md`](../../README.md) y [`RESPUESTAS-CLIENTE.md`](../discovery/RESPUESTAS-CLIENTE.md).
> 2. Datos operativos: [`DATOS-EXCEL.md`](../operations/DATOS-EXCEL.md).
> 3. Comunicaciones y políticas: [`PLANTILLAS-WHATSAPP.md`](../operations/PLANTILLAS-WHATSAPP.md).
> 4. Técnica: [`DECISION-STACK.md`](../architecture/DECISION-STACK.md).
> 5. Ejecución: este documento.
>
> Si algo entra en conflicto, prevalecen (1) y (4); este documento debe actualizarse.

---

## 1. Dónde estamos

| Dimensión | Estado |
|---|---|
| Descubrimiento con el cliente | **Cerrado** (respuestas, Excel, plantillas de WhatsApp). |
| Alcance | **Definido por fases** (MVP, Fase 2, roadmap). |
| Arquitectura y stack | **Decididos** (Opción B: Django + DRF + Next.js + PostgreSQL). |
| Repositorio del producto | Creado; 4 commits; **solo documentación**, sin código. |
| Implementación | **No iniciada**. |
| Entregables del curso | Borradores avanzados en inglés en `_local/entregables/` (propuesta, Workshop 1, Workshop 2). |
| Datos sensibles | Analizados y guardados **solo** en `_local/analysis/` (fuera de Git). |

**En una frase:** el "qué" y el "con qué" están resueltos; falta cerrar unos pocos datos
bloqueantes del cliente y convertir el diseño en software.

---

## 2. El producto en una página

Kintsugi Studio (Bogotá) es un estudio de belleza con **200–230 clientes/mes** y **8–10 citas/día**.
Hoy opera con WhatsApp, Excel y memoria. La plataforma resuelve cuatro dolores:

1. **Reserva real** con disponibilidad por profesional y bloqueo de solapamientos.
2. **Historial del cliente** centralizado (fotos, fórmulas, notas, alergias, preferencias).
3. **Control financiero** (caja, gastos, comisiones, proveedores, reportes).
4. **Comunicación** (confirmaciones, recordatorios, cumpleaños, encuestas).

Tres frentes de producto:

| Frente | Usuarios | Contenido |
|---|---|---|
| Sitio público | Visitante / cliente | Marca, servicios, precios, galería, contacto, reserva. |
| Portal del cliente | Cliente | Registro, citas, historial en lectura, consentimientos. |
| Panel administrativo | Operario / administrador / profesional | Agenda, CRM, finanzas, inventario, proveedores, reportes. |

**Identidad obligatoria:** negro `#080808`, oro `#C9A04A`, champagne `#F4E2B5`, blanco perla
`#FFFFFF`, grafito `#292526`; Montserrat (funcional), Cormorant Garamond (editorial),
Great Vibes (acento). Proporción orientativa 50/25/20/5. Ver
[`../docs/PROYECTO-KINTSUGI.md`](PROYECTO-KINTSUGI.md) y el manual de marca en `_local/md/`.

---

## 3. Alcance congelado

### 3.1 MVP — núcleo operativo

- Sitio público con identidad de marca.
- Catálogo de **72 servicios** (precio fijo / "desde" / rango) con profesional.
- **Reserva real**: disponibilidad por profesional, bloqueo temporal y prevención de solapamientos.
- Agenda **diaria y semanal**.
- Ficha e historial del cliente (fotos, fórmulas, notas).
- Detección de **clientes duplicados** (teléfono, correo, documento normalizado).
- **Inventario** de productos (entradas, salidas, ajustes).
- Panel administrativo con **roles y permisos**.
- **Tablero diario** básico: citas, ocupación y no-show.

### 3.2 Fase 2 — CRM y control financiero

- Recordatorios automáticos por WhatsApp y correo.
- Segmentación: frecuentes, inactivos, cumpleaños, alto valor, nuevos.
- Referidos (5.000 COP; 20.000 COP a los 3 referidos).
- Bono de cumpleaños (10 % en la semana).
- Tarjetas de regalo virtuales.
- Encuesta de satisfacción.
- **Cierre de caja** diario y gastos por categoría.
- **Comisiones** (55 % / 60 %) y liquidación semanal.
- Proveedores, cuentas por pagar y pago a proveedores.
- Reportes de ventas, ocupación, ticket promedio, retención y LTV.
- Tablero financiero, nómina, impuestos, metas y conciliación bancaria.

### 3.3 Roadmap — fuera del MVP

- Pago o anticipo en línea (Wompi/Bold).
- Confirmación automática de la cita.
- Portal de proveedores y órdenes de compra.
- Facturación electrónica DIAN.
- Puntos / fidelización.
- Multi-sede.
- Integración con software contable.

> **Nota de alcance:** el cliente pidió pago en línea y confirmación automática de palabra, pero
> los marcó como **W** en MoSCoW. Se mantienen en roadmap hasta confirmación escrita. La **W** de
> proveedores se interpreta como "sin portal ni órdenes de compra"; el registro de facturas y
> cuentas por pagar sí entra en Fase 2.

---

## 4. Decisiones cerradas

| Tema | Decisión |
|---|---|
| Backend | Python 3.12 · Django 5.2 LTS · DRF |
| Frontend | Next.js (App Router) · React 19 · TypeScript · Tailwind · shadcn/ui |
| Back-office | Django Admin + Unfold |
| Base de datos | PostgreSQL 16 |
| Auth | SimpleJWT (API) + sesión (admin) |
| 2FA | django-otp (TOTP) para operario y administrador |
| Permisos | Grupos Django + django-guardian |
| Auditoría | django-simple-history |
| Jobs | Redis + Huey |
| Archivos | Cloudflare R2 o Supabase Storage (S3) |
| API | OpenAPI 3 con drf-spectacular |
| Pruebas | pytest · pytest-django · factory_boy · Playwright · Vitest |
| CI/CD | GitHub Actions |
| Arquitectura | Monolito modular, capas + puertos/adaptadores |
| Patrones exigidos | Strategy, Factory, Observer, State, Facade, Adapter |

**Reglas de negocio críticas:** agenda 06:00–19:00 (citas reales 08:00–19:00); descansos por
profesional con excepciones por fecha; comisión 55 % / 60 %; auxilio de transporte $7.100/día;
reprogramación máximo 12 h antes (una vez); tolerancia 5 min; garantía 5 días; abono no
reembolsable; retención de datos 1 año; auditoría y 2FA.

**Roles:** operario (control total), administrador (operación, sin configuración de plataforma),
profesional (su agenda e historial), cliente (sus datos en lectura).

---

## 5. Activos y frontera entre producto y curso

| Ubicación | Qué contiene | Se versiona |
|---|---|---|
| `kintsugi-studio-web/` | Documentación del producto, y luego `backend/`, `frontend/`, `.github/`. | **Sí** |
| `_local/entregables/` | Propuesta, Workshop 1 y Workshop 2 (inglés, para Classroom). | **No** |
| `_local/md/`, `_local/pdf/` | Material de la asignatura. | **No** |
| `_local/analysis/` | CSV con nombres de clientas y datos personales. | **No** |

**Regla de oro:** nada de `_local/` se copia al repositorio del producto; el repo contiene solo
producto. Los PDFs del curso se suben a Classroom.

**Tensión a resolver:** el curso exige una carpeta `Final-Project` con documentación en inglés,
pruebas, CI y demo. El repositorio del producto está en español. Recomendación: mantener el
código del producto como fuente única y generar, al cierre, un paquete `Final-Project/` con la
documentación técnica en inglés y enlaces al mismo código, sin duplicar la implementación.

---

## 6. Diagnóstico

### 6.1 Fortalezas

- Descubrimiento inusualmente completo: catálogo real de 72 servicios, agenda, liquidaciones y
  plantillas de WhatsApp ya analizados.
- Stack decidido con matriz de decisión y justificación.
- Modelo de dominio y relacional ya esbozados (12 CRC, ~23 tablas, diagramas Mermaid).
- Requisitos, historias y criterios GWT ya redactados para el curso.
- Separación clara entre producto y entregables académicos.

### 6.2 Inconsistencias detectadas y resueltas

| # | Hallazgo | Acción |
|---|---|---|
| 1 | [`ALCANCE-MVP.md`](ALCANCE-MVP.md) describía pagos y cierre de caja dentro de la Fase 1, contradiciendo el alcance confirmado del README. | **Corregido** en este mismo cambio: pagos al roadmap y caja a Fase 2. |
| 2 | El README lista el **portal del cliente** como parte del producto, pero no lo incluye en la lista de la primera versión. | **Abierto:** decidir si el MVP permite reserva como invitado, con cuenta, o ambas. Recomendación: reserva como invitado + cuenta mínima para reprogramar/cancelar. |
| 3 | El README incluye **tablero diario** en el MVP; el Workshop 1 del curso deja US-28 (tablero/reportes) fuera del MVP. | **Abierto:** separar "tablero diario básico" (MVP) de "reportes avanzados" (Fase 2) y ajustar el mapeo del curso. |
| 4 | La confirmación automática está en **W**, pero el flujo de reserva del Workshop 2 asume confirmación del administrador. | **Coherente**, pero debe explicitarse: reserva queda `pending` y el salón confirma. |

### 6.3 Riesgos vigentes

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Faltan **duraciones** estándar por servicio | Alto: bloquea el motor de disponibilidad. | Modelar `duration_minutes` con valores por defecto por categoría, editables; pedir el dato al cliente en paralelo. |
| El cliente espera el CRM/ERP completo en ~1 mes | Alto | Entregar el núcleo operativo y presentar el roadmap por escrito. |
| Ambigüedad 60 % por implementos, auxilio de transporte y meta diaria/semanal | Medio | Parametrizar por profesional y dejar valores por defecto; confirmar antes de automatizar nómina. |
| Rol de YULIANA y ELIANA sin definir | Medio | Crear profesionales inactivos; no asignarles citas hasta confirmar. |
| Sin logo vectorial, fotos ni autorizaciones | Medio | Usar placeholders de marca y un checklist de publicación. |
| Sin términos, privacidad ni política formal de cancelación | Alto (legal) | Redactar borradores y validarlos con el cliente antes de producción. |
| Pago en línea y confirmación automática en W | Medio | Dejar el puerto de pago listo; no construir checkout hasta confirmar. |

---

## 7. Decisiones pendientes del cliente

### Bloqueantes para el MVP

| Dato | Bloquea | Supuesto temporal si no llega |
|---|---|---|
| Duración estándar por servicio y adicional | Motor de disponibilidad | Duraciones por categoría, editables en el panel. |
| Leyenda de colores de la agenda (distinta al negro) | Solo ayuda visual | El color no se usa como dato de negocio. |
| Anticipación mínima para reservar | Regla de reserva | 2 h de anticipación; configurable. |
| Ventana de recordatorio (24 h / 48 h) | Fase 2 | 24 h antes. |
| Portal del cliente: ¿reserva con cuenta o como invitado? | Flujo de reserva | Invitado + cuenta opcional. |

### No bloqueantes (Fase 2 / legal)

- Confirmar 60 % por implementos propios y a quién aplica el auxilio de transporte.
- Confirmar si los $645.800 de meta son diarios o semanales.
- Confirmar IVA y forma de facturación.
- RUT, cámara de comercio y certificado bancario (pasarela).
- Dominio y correo corporativo.
- Términos y condiciones, política de privacidad y de cancelación.
- Manual de marca, logo vectorial, fotografías y autorizaciones.
- Completar agenda de diciembre y semanas faltantes de noviembre.

---

## 8. Plan de ejecución — Fase 1

Duración objetivo: **4–6 semanas** de trabajo parcial de dos personas.

| Etapa | Entregable | Criterio de cierre |
|---|---|---|
| **S0. Cimientos** | Esqueleto `backend/` + `frontend/`, Docker Compose, `.env.example`, CI en GitHub Actions, ADRs. | `docker compose up` levanta API + Postgres; CI corre lint y pruebas. |
| **S1. Dominio y catálogo** | Modelos `Service`, `ServiceCategory`, `Professional`, `ProfessionalService`, `Schedule`, `ScheduleException`; seed con los 72 servicios. | Catálogo servido por API y visible en el sitio. |
| **S2. Agenda y disponibilidad** | `Appointment`, `AppointmentItem`, motor de disponibilidad, bloqueo temporal, prevención de solapamientos. | Tests de concurrencia; no se vende dos veces el mismo bloque. |
| **S3. Reserva pública** | Flujo de reserva (servicio → profesional → fecha/hora → datos → confirmación `pending`). | Un visitante completa una reserva sin intervención del salón. |
| **S4. Panel y CRM** | Agenda diaria/semanal, gestión de citas, ficha e historial, detección de duplicados. | El salón opera el día desde el panel; historial con fotos/notas. |
| **S5. Inventario y tablero** | Inventario con movimientos, tablero diario (citas, ocupación, no-show). | Inventario y tablero reflejan la operación real. |
| **S6. Cierre y despliegue** | Pruebas, seed de demostración, despliegue, capacitación, documentación. | CI verde, demo de 5–10 min, guía de uso. |

**Regla de secuencia:** el motor de disponibilidad y la agenda van antes que cualquier pantalla
bonita. Es el corazón del producto y el mayor riesgo técnico.

---

## 9. Estándares de trabajo

- **Idioma:** producto en español; entregables del curso en inglés.
- **Identificadores:** `RF-01`, `RNF-01`, `BR-01`, `US-01`, `AC-01`; no se renumeran.
- **Nombres:** clases y tablas iguales en UML, ER y código (`Appointment`, `appointment`).
- **Commits:** convencionales (`feat:`, `fix:`, `docs:`, `test:`, `chore:`).
- **Ramas:** `main` estable; trabajo en `feat/...`, `fix/...`, `docs/...`.
- **Pruebas:** pytest; cobertura de dominio ≥ 70 %; CI obligatorio en cada PR.
- **Seguridad:** sin secretos ni datos personales en el repo; `.env.example` documentado.
- **Diagramas:** Mermaid dentro de los documentos, versionados como texto.

---

## 10. Próxima acción inmediata

1. **Cerrar el alcance del portal del cliente** (invitado vs cuenta) y del tablero diario.
2. **Pedir al cliente** las duraciones por servicio, la leyenda de colores y el logo vectorial.
3. **Crear el esqueleto técnico** (`backend/`, `frontend/`, Docker, CI) y el primer ADR.
4. **Implementar el dominio y el motor de disponibilidad** con pruebas desde el primer día.

> Este documento debe revisarse al cerrar cada etapa para mantener una sola versión de la verdad.
