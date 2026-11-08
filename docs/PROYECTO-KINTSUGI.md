# Brief del proyecto — Kintsugi Studio Web

> Fuente principal: manual de identidad visual de Kintsugi Studio (documento del cliente).
> Estado: **descubrimiento cerrado**. Las respuestas confirmadas están en
> [`RESPUESTAS-CLIENTE.md`](RESPUESTAS-CLIENTE.md); si hay conflicto, prevalece ese documento
> y el [README](../README.md). Este brief conserva el contexto y los supuestos iniciales.

## 1. El negocio

**Kintsugi Studio** es un estudio de belleza y transformación en Bogotá, inspirado en el arte
japonés del kintsugi: reparar las grietas con oro para reconocer el valor de la historia.
Dirección visual: **lujo**.

| Dato | Valor |
|---|---|
| Nombre | Kintsugi Studio |
| Slogan | «Es momento de reparar tus grietas para que brilles una vez más» |
| Posicionamiento | «La belleza de renacer» |
| Frase de campaña | «Tus grietas también cuentan tu historia. Hazlas brillar» |
| Instagram / TikTok | @kintsugi_cn |
| WhatsApp | 313 206 5167 |
| Dirección | Calle 68 sur 78j-28, piso 02 (Bogotá) |
| Clientes al mes | 200–230 (varía por temporada) |
| Personalidad | Lujosa, segura, femenina, cálida, transformadora |

## 2. Identidad visual (obligatoria en el producto)

### Paleta

| Color | HEX | Uso |
|---|---|---|
| Negro profundo | `#080808` | Base principal, fondos premium |
| Oro Kintsugi | `#C9A04A` | Acento: líneas, detalles, títulos |
| Champagne | `#F4E2B5` | Fondos cálidos, espacios de respiro |
| Blanco perla | `#FFFFFF` | Contraste, textos sobre oscuro |
| Grafito | `#292526` | Fondos secundarios, apoyo |

Proporción orientativa: **50 % negro · 25 % blanco perla/champagne · 20 % oro · 5 % grafito**.

### Tipografía

- **Montserrat** — funcional: cuerpo, precios, horarios, botones (Regular, Medium, SemiBold).
- **Cormorant Garamond** — editorial: titulares de campaña (Medium, SemiBold).
- **Great Vibes** — acento caligráfico breve, nunca en párrafos ni precios.
- Jerarquía: titular (Cormorant/Montserrat SemiBold) → subtítulo (Montserrat Medium) →
  cuerpo (Montserrat Regular) → CTA/precio (Montserrat SemiBold) → acento (Great Vibes).

### Recursos gráficos

Grietas doradas como hilo conductor (finas, orgánicas), destellos con moderación,
aros/círculos, ondas metálicas y texturas mate. Evitar ruido visual, degradados fuertes
y efectos simultáneos.

### Voz y tono

Cercana, profesional, inspiradora y persuasiva; sin promesas absolutas, sin juzgar la
apariencia, sin urgencia engañosa, sin exceso de mayúsculas/emojis.

## 3. Alcance solicitado

El cliente pidió una plataforma **todo en uno**: sitio web institucional, reserva de citas con
pago en línea, confirmación automática y un panel administrativo con agenda, recordatorios,
información de clientes, información financiera, estadísticas de ventas, gestión del dinero y
proveedores. En una frase: **CRM + ERP ligero para el salón**.

### 3.1 Sitio público (visitantes)

1. **Inicio** con propuesta de valor, servicios destacados y prueba social.
2. **Servicios** con descripción, duración y precio.
3. **Nosotros / filosofía kintsugi** y presentación del equipo.
4. **Galería** de resultados (antes/después con autorización).
5. **Reserva de cita** en línea, con disponibilidad real y pago.
6. **Mi cuenta**: historial de citas y datos del cliente.
7. **Contacto**: WhatsApp, ubicación, horarios, redes.
8. **Políticas**: cancelación, privacidad, tratamiento de datos.

### 3.2 Reserva y pagos

1. Disponibilidad calculada en tiempo real por servicio, profesional y duración.
2. Bloqueo temporal del horario mientras el cliente completa el pago.
3. Pago total o anticipo mediante pasarela colombiana.
4. Confirmación automática inmediata cuando el pago es aprobado.
5. Recordatorios programados antes de la cita.
6. Reprogramación y cancelación según política, con reembolso cuando aplique.
7. Registro de pagos, comisiones de pasarela y conciliación.

### 3.3 Panel administrativo — CRM

1. Agenda diaria/semanal por profesional.
2. Gestión de citas: confirmar, reprogramar, cancelar, marcar asistencia.
3. Catálogo de servicios: precio, duración, profesional habilitado.
4. Horarios y bloqueos (almuerzo, festivos, vacaciones).
5. Ficha del cliente: datos, historial, notas técnicas, preferencias y autorizaciones.
6. Segmentación: frecuentes, inactivos, cumpleaños, alto valor.
7. Recordatorios y comunicaciones.
8. Roles y permisos.

### 3.4 Panel administrativo — ERP

1. Cierre de caja diario y control de ingresos/gastos por categoría.
2. Comisiones de profesionales y su liquidación.
3. Proveedores, órdenes de compra y cuentas por pagar.
4. Inventario de productos y consumo por servicio.
5. Reportes: ventas por período, servicio y profesional; ticket promedio; ocupación;
   no-show; retención; flujo de caja.
6. Exportación a Excel/CSV e integración contable cuando aplique.

> Un ERP completo es un producto de años. Para la primera versión se propone el núcleo
> operativo y financiero, y se amplía por etapas. Ver [`ALCANCE-MVP.md`](ALCANCE-MVP.md).

### 3.5 Back-office técnico

- API REST documentada (OpenAPI/Swagger).
- Autenticación con roles: `client`, `staff`, `admin`, `accountant`.
- Auditoría de cambios sensibles (precios, citas, pagos).
- Panel de administración para contenido y operación.

## 4. Actores

| Actor | Necesidad |
|---|---|
| Visitante | Conocer el estudio y reservar sin fricción |
| Cliente | Reservar, pagar, reprogramar, cancelar y ver su historial |
| Estilista / profesional | Ver su agenda y marcar asistencia |
| Recepción / administrador | Gestionar agenda, servicios, clientes y disponibilidad |
| Contador / socio | Revisar caja, gastos, comisiones y reportes |
| Dueño/a | Ver métricas, finanzas y mantener la identidad de marca |
| Pasarela de pago | Procesar cobros y confirmar transacciones |
| Sistema de notificaciones | Enviar confirmaciones y recordatorios |

## 5. Reglas de negocio probables (por validar)

- Una cita ocupa un bloque de duración del servicio + margen de alistamiento.
- No se puede agendar sobre un bloque ocupado del mismo profesional.
- La cita debe estar dentro del horario de atención y no en un bloqueo.
- El horario se bloquea temporalmente durante el checkout y se libera si el pago no se completa.
- La cita queda `confirmed` con el pago aprobado (si hay anticipo) o con aprobación del salón.
- Pago rechazado o abandonado → el horario se libera automáticamente.
- Cancelación permitida hasta N horas antes; después aplica la política de penalización.
- Un cliente no puede tener dos citas solapadas.
- Estados: `pending → confirmed → completed`; `cancelled` y `no_show` como salidas.
- Confirmación inmediata al agendar y recordatorios X horas antes.
- La comisión de la pasarela se registra como gasto y se concilia en el cierre de caja.
- Datos personales tratados según Ley 1581 de 2012 (autorización explícita).

## 6. Supuestos actuales

1. Un solo local (Calle 68 sur), con varios profesionales y sillas.
2. Volumen actual: **200–230 clientes al mes**, con variación por temporada.
3. Reserva **real**: el horario se bloquea y solo se confirma con pago o aprobación.
4. Pago o anticipo en línea con pasarela colombiana (porcentaje por definir).
5. Confirmación automática por correo; WhatsApp queda como evolución.
6. Los precios se publican.
7. El cliente pidió CRM + ERP; se implementa por fases para no comprometer la calidad.
8. La facturación electrónica se integra con el software actual o se emite por fuera.

## 7. Decisiones que faltan

El detalle está en [`CUESTIONARIO-CLIENTE.md`](CUESTIONARIO-CLIENTE.md). Las decisiones
que bloquean el diseño son:

1. Pasarela de pago y porcentaje de anticipo.
2. Confirmación automática vs. aprobación manual de la cita.
3. Política de cancelación, reprogramación y no-show.
4. Integración de facturación electrónica.
5. Alcance exacto de "gestión del dinero" y "proveedores".
6. Roles y quién ve la información financiera.

## 8. Riesgos del proyecto

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Alcance crece (CRM + ERP + pagos + multi-sede) | Alto | MVP por fases por escrito; lo demás al backlog priorizado |
| Integración de pasarela o facturación electrónica | Alto | Probar sandbox en la semana 1; definir responsable y documentos |
| Falta de contenido real (fotos/precios) | Medio | Placeholders de marca desde el inicio |
| Requisitos del cliente llegan tarde | Alto | Entrevista esta semana; congelar alcance antes de codificar |
| Equipo de 2 personas vs. alcance del cliente | Alto | Priorizar reserva + agenda + 4 pantallas clave |
| Identidad visual mal aplicada | Medio | Tokens de diseño derivados del manual, revisión contra checklist |

## 9. Checklist de marca antes de publicar

- [ ] Logo proporcionado, legible y con zona de seguridad.
- [ ] Paleta y jerarquía tipográfica respetadas.
- [ ] Contraste y espacio libre suficientes.
- [ ] Fotografía fiel al resultado real (sin filtros que distorsionen).
- [ ] Texto claro, cálido y profesional.
- [ ] Precio, vigencia, contacto y condiciones verificados.
- [ ] La pieza funciona en móvil, tablet y escritorio.
