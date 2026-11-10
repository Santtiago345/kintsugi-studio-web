# Kintsugi Studio — Plataforma web y gestión del salón

Sitio web oficial, reserva de citas y sistema de gestión (**CRM + ERP ligero**) para
**Kintsugi Studio**, estudio de belleza en Bogotá.

**Equipo:** Santiago Neuta · David Mateo Ballesteros
**Cliente:** Kintsugi Studio
**Estado:** descubrimiento cerrado · alcance y arquitectura definidos · prototipo de interfaz disponible · implementación pendiente

---

## Español

### El negocio

Kintsugi Studio es un estudio de belleza y transformación inspirado en el arte japonés del
kintsugi: reparar las grietas con oro para reconocer el valor de la historia.

| Dato | Valor |
|---|---|
| Sede | Calle 68 sur 78j-28, piso 02, Bogotá |
| Clientes al mes | 200–230, con variación por temporada |
| Citas por día | Aproximadamente 8–10 |
| WhatsApp Business | 313 206 5167 |
| Correo | kintsugicn@gmail.com |
| Contacto | Nicolle |
| Instagram / TikTok | @kintsugi_cn |
| Equipo del salón | Alrededor de 7 profesionales y proveedores |

La identidad visual del producto sigue el manual de marca: negro profundo `#080808`, oro
Kintsugi `#C9A04A`, champagne `#F4E2B5`, blanco perla `#FFFFFF` y grafito `#292526`;
tipografías Montserrat, Cormorant Garamond y Great Vibes.

### Qué construimos

Una plataforma todo en uno con tres frentes:

1. **Sitio público:** marca, servicios, precios, galería, contacto y reserva en línea.
2. **Portal del cliente:** registro, citas, historial en modo lectura y consentimientos.
3. **Panel administrativo:** agenda, clientes, historial, comunicaciones, caja, gastos,
   comisiones, proveedores, inventario y reportes.

El producto cubre un **CRM** (ficha, historial, segmentación, referidos, tarjetas de regalo y
encuestas) y un **ERP ligero** (cierre de caja, ingresos y gastos, cuentas por pagar,
comisiones, nómina, metas, conciliación y reportes).

### Alcance confirmado

#### Primera versión — núcleo operativo

- Sitio público con la identidad de marca.
- Catálogo de **72 servicios** con precio, duración y profesional (la duración está pendiente de confirmar).
- Reserva real con disponibilidad por profesional y bloqueo de solapamientos.
- Agenda diaria y semanal.
- Ficha e historial del cliente con fotos, fórmulas y notas.
- Detección de clientes duplicados.
- Inventario de productos.
- Panel administrativo con roles y permisos.
- Tablero diario con citas, ocupación y no-show.

#### Fase 2 — CRM y control financiero

- Recordatorios automáticos por WhatsApp y correo.
- Segmentación de clientes: frecuentes, inactivos, cumpleaños, alto valor y nuevos.
- Programa de referidos.
- Bono de cumpleaños.
- Tarjetas de regalo virtuales.
- Encuesta de satisfacción.
- Cierre de caja diario y gastos por categoría.
- Comisiones de profesionales y liquidación semanal.
- Proveedores, cuentas por pagar y pago a proveedores.
- Reportes de ventas, ocupación, ticket promedio, retención y valor de vida.
- Tablero financiero con ingresos, gastos y metas.
- Nómina, impuestos, metas mensuales y conciliación bancaria.

#### Roadmap — fuera del MVP

- Pago o anticipo en línea.
- Confirmación automática de la cita.
- Portal de proveedores y órdenes de compra.
- Facturación electrónica DIAN.
- Programa de puntos o fidelización.
- Multi-sede.
- Integración con software contable.

> **Nota de alcance:** el cliente pidió pago en línea y confirmación automática al inicio, pero
> los marcó como **W** en el ejercicio MoSCoW. Se mantienen en el roadmap y deben confirmarse
> antes de diseñar el checkout. La **W** de proveedores se interpreta como "sin portal ni
> órdenes de compra"; el registro de facturas y cuentas por pagar sí forma parte de finanzas.

### Reglas de negocio confirmadas

| Regla | Detalle |
|---|---|
| Catálogo | **72 servicios** en 7 áreas: cabello, manicura y pedicura, adicionales de uñas, cejas y pestañas, depilación, maquillaje y promociones. Precios fijos, “desde” y rangos por uña. |
| Horario | Agenda de **06:00 a 19:00**; las citas reales se mueven entre **08:00 y 19:00**. |
| Descansos | El relleno negro de la agenda marca horas no disponibles: columna completa = día libre; negro parcial = horario reducido o festivo. Patrón variable por profesional. |
| Comisiones | 55 % del total del servicio; 60 % cuando el profesional trae sus implementos. |
| Liquidación | Semanal, por profesional. |
| Auxilio de transporte | **$7.100 por día trabajado**, configurable por profesional. |
| Ticket promedio | **$60.882** (octubre 2026, 175 líneas de servicio). |
| Meta diaria | **$645.800** (pendiente confirmar si es diaria o semanal). |
| Referidos | 5.000 COP de descuento por cliente referido; 20.000 COP al llegar a 3, dentro de un mes desde el último servicio. |
| Cumpleaños | Recordatorio una semana antes y bono del 10 % redimible en la semana del cumpleaños. |
| Historial | Guarda fotos, fórmulas, notas, alergias y preferencias por procedimiento. |
| Duplicados | El sistema debe advertir por teléfono, correo o documento normalizado. |
| Edición del cliente | El cliente no puede modificar sus datos ni su historial; solo un administrador. |
| Segmentación | Frecuentes, inactivos, cumpleaños, alto valor y nuevos. |
| Tarjetas de regalo | Virtuales, con código, saldo y vencimiento. |
| Encuesta | Satisfacción posterior al servicio. |
| Categorías de gasto | Servicio, arriendo, proveedores y gastos diarios. |
| Proveedores | Alrededor de 7; compras mensuales o cada dos meses; contado y crédito a 30 días; solo factura. |
| Inventario | Entradas, salidas y ajustes; sin alertas de stock mínimo en el MVP. |
| Retención de datos | Un año, salvo obligación legal contable. |
| Seguridad | 2FA para administradores y operarios; auditoría interna de cambios sensibles. |
| Reserva | Reprogramación máximo **12 h antes**; tolerancia de espera **5 min**; garantía de **5 días**. |
| Restricciones | No mascotas; no menores de **7 años**; el abono **no es reembolsable**. |
| Precio | El valor cotizado puede variar si se agrega o modifica un servicio. |

### Roles y permisos

| Rol | Alcance |
|---|---|
| **Operario** | Control total; configura la plataforma, gestiona roles y descarga datos. |
| **Administrador** | Toda la operación, excepto funciones riesgosas o de configuración de plataforma. |
| **Profesional** | Su agenda completa, su historial de servicios y recordatorios. |
| **Cliente** | Sus citas y su historial en modo lectura; no puede editar. |

Solo operario y administrador pueden cambiar precios, cancelar citas y ver información
financiera. La plataforma se usa desde móvil y computador, con varios usuarios a la vez.

### Integraciones

| Integración | Uso | Fase |
|---|---|---|
| Google Calendar | Sincronizar citas con el calendario del profesional. | MVP |
| WhatsApp Business Cloud API | Confirmaciones, recordatorios, cumpleaños y consentimiento. | MVP / Fase 2 |
| Correo transaccional | Confirmaciones, recordatorios y encuestas. | MVP |
| Wompi / Bold | Pago o anticipo en línea. | Roadmap |
| Almacenamiento S3 | Fotos, fórmulas y documentos de clientes. | MVP |

### Stack

**Opción B — Django + Next.js + PostgreSQL.**

| Capa | Tecnología |
|---|---|
| Backend | Python 3.12 · Django 5.2 LTS · Django REST Framework |
| Frontend | Next.js (App Router) · React 19 · TypeScript · Tailwind CSS · shadcn/ui |
| Back-office | Django Admin + Unfold |
| Base de datos | PostgreSQL 16 |
| Autenticación | JWT (SimpleJWT) + sesión para el admin |
| 2FA | django-otp (TOTP) para administradores y operarios |
| Permisos | Grupos de Django + django-guardian |
| Auditoría | django-simple-history |
| Jobs | Redis + Huey |
| Archivos | Cloudflare R2 o Supabase Storage (S3-compatible) |
| API | OpenAPI 3 con drf-spectacular |
| Pruebas | pytest · pytest-django · factory_boy · Playwright · Vitest |
| CI/CD | GitHub Actions |
| Despliegue | Vercel (frontend) · Railway/Render (backend) · Neon (base de datos) |
| Observabilidad | Sentry + logs estructurados |

**Arquitectura:** monolito modular con capas y puertos/adaptadores en los bordes. Sin
microservicios, sin Kubernetes y sin app nativa para este volumen.

```
Next.js (sitio público + portal)   Django Admin (back-office)
                    \                 /
                     Django REST API
                          |
   identidad · catálogo · agenda · CRM · finanzas · inventario · notificaciones
                          |
   PostgreSQL · Redis · S3 · Google Calendar · WhatsApp · pasarela · correo
```

### Roadmap

| Fase | Duración estimada | Resultado |
|---|---|---|
| Núcleo operativo | 4–6 semanas | Sitio, reserva real, agenda, clientes, inventario y tablero. |
| CRM y finanzas | 5–7 semanas | Segmentación, referidos, tarjetas, comisiones, caja, proveedores y reportes. |
| Pagos y crecimiento | 3–5 semanas | Pago en línea, facturación electrónica, multi-sede y contabilidad. |

El cliente espera el núcleo operativo en aproximadamente un mes. El roadmap completo es de
**12–18 semanas**; prometer el ERP completo en un mes no es realista.

### Documentación

- [Respuestas del cliente](docs/RESPUESTAS-CLIENTE.md) — datos, alcance, reglas, roles y pendientes.
- [Datos operativos de los Excel](docs/DATOS-EXCEL.md) — catálogo de 72 servicios, agenda, descansos, comisiones y liquidación.
- [Plantillas y políticas de WhatsApp](docs/PLANTILLAS-WHATSAPP.md) — textos de reserva y asignación, variables y reglas.
- [Diseño de interfaz](docs/DISENO-UI.md) — sistema visual, principios UX, pantallas y prototipo navegable.
- [Brief del proyecto](docs/PROYECTO-KINTSUGI.md) — negocio, marca, actores, reglas y riesgos.
- [Cuestionario de descubrimiento](docs/CUESTIONARIO-CLIENTE.md) — preguntas que originaron las respuestas.
- [Alcance por etapas](docs/ALCANCE-MVP.md) — MVP, fases y criterios de aceptación.
- [Decisión de stack](docs/DECISION-STACK.md) — alternativas, matriz y decisión final.
- [Índice de documentación](docs/README.md).

### Pendientes del cliente

- [x] Lista de servicios y precios — recibida en el Excel (**72 servicios**).
- [x] Horarios por profesional y días festivos — recibidos en la agenda.
- [ ] Duraciones estándar por servicio y adicional.
- [ ] Leyenda de colores de la agenda distinta al negro.
- [ ] Manual de marca y logo vectorial.
- [ ] Fotografías profesionales y autorizaciones de imagen.
- [ ] Términos y condiciones.
- [ ] Política formal de cancelación, reprogramación y no-show.
- [ ] RUT, cámara de comercio y certificado bancario para la pasarela.
- [ ] Decisión sobre dominio y correo corporativo.
- [ ] Confirmación de la prioridad de pagos y confirmación automática.
- [ ] Ventana de recordatorios de cita.
- [ ] Requisito de retención contable frente al año de retención de datos.
- [ ] Confirmación del 60 % por implementos propios y del auxilio de transporte.
- [ ] Confirmación del rol de YULIANA y ELIANA.
- [ ] Confirmación de IVA y facturación.

**Soporte y capacitación:** a cargo de Santiago y David, con sesiones para administradores y
profesionales.

---

## English

Official website, online booking, and management platform (**CRM + light ERP**) for
**Kintsugi Studio**, a beauty studio in Bogotá, Colombia.

- **One site, 200–230 clients per month** (approximately 8–10 appointments per day).
- **Three faces:** public website, client portal, and internal admin panel.
- **Confirmed core:** brand website, **72-service catalog**, real booking, agenda, client
  record, duplicate detection, inventory, and daily dashboard.
- **Operational facts:** agenda 06:00–19:00 with real appointments 08:00–19:00; black agenda
  cells mean non-working time (full column = day off, partial = reduced hours or holiday);
  average ticket 60,882 COP; daily goal 645,800 COP; 7,100 COP transport allowance per
  worked day.
- **Booking policies:** reschedule at least 12 hours ahead, 5-minute waiting tolerance, 5-day
  guarantee, no pets, no children under 7, non-refundable deposit, quote may vary if the
  service changes.
- **WhatsApp templates:** booking summary for the client and service assignment for the
  professional, plus variable and implementation rules.
- **Phase 2:** automated reminders, segmentation, referrals, birthday benefit, gift cards,
  satisfaction survey, cash closing, expenses, commissions, providers, accounts payable, and
  monthly reports.
- **Roadmap:** online payments, automatic confirmation, electronic invoicing, loyalty points,
  multi-site, and accounting integration.

**Business rules:** 55 % commission (60 % when the professional provides their own
implements), settled weekly; 5,000 COP referral discount and 20,000 COP at three referrals
within one month of the last service; 10 % birthday discount during the birthday week;
one-year data retention; 2FA for administrators and operators; internal audit.

**Roles:** operator (full control), administrator (daily operation), professional (own agenda
and history), client (own data in read-only mode).

**Stack:** Django 5.2 + Django REST Framework + Next.js (React + TypeScript) + PostgreSQL +
Django Admin/Unfold, with Redis/Huey for background jobs, S3-compatible storage, Google
Calendar, WhatsApp Cloud API, and a payment gateway adapter.

**Status:** discovery closed; scope and architecture defined; implementation not started.

### Repository layout

```
.
├── docs/          # Product documentation: client answers, brief, scope, stack, data, design
├── frontend/      # Next.js app (planned) + static UI prototype in frontend/prototype
├── backend/       # REST API, domain logic, database, tests (planned)
├── .github/       # CI/CD workflows (planned)
└── README.md
```

### Roadmap

1. Operational core: website, real booking, agenda, client record, inventory, dashboard.
2. CRM and finance: reminders, segmentation, referrals, gift cards, cash closing, commissions,
   providers, reports.
3. Growth: payments, electronic invoicing, multi-site, accounting integration.

## License

Proprietary. Brand assets belong to Kintsugi Studio.
