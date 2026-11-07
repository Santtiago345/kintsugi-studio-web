# Alcance por etapas — Kintsugi Studio Web

> Documento de trabajo para ordenar el alcance solicitado (web + reservas + pagos + CRM + ERP).
> No es una propuesta comercial todavía; sirve para decidir qué entra primero.

## 1. Lectura del pedido

El cliente pidió, en una sola plataforma:

- Sitio web institucional con la identidad de marca.
- Reserva de citas con disponibilidad real.
- Pasarela de pago y confirmación automática.
- Panel administrativo con agenda, recordatorios y clientes.
- Información financiera, estadísticas de ventas y gestión del dinero.
- Proveedores.
- "Un CRM por un lado y un ERP por otro".

Eso, completo, es un producto de varios años y varios equipos. La estrategia correcta es
**entregar primero el núcleo que genera valor y riesgo** (reserva + pago + agenda + caja) y
ampliar por etapas. Intentar todo de una vez pone en riesgo la calidad, la fecha y la
confianza del cliente.

## 2. Fase 1 — Núcleo operativo (MVP)

**Objetivo:** que un cliente pueda reservar y pagar solo, y que el salón pueda operar el día
con una agenda confiable y un cierre de caja básico.

### Sitio público

- Inicio, servicios, filosofía, galería, contacto y políticas.
- Diseño con los tokens del manual de marca (negro, oro, champagne, perla, grafito).
- Responsive y optimizado para móvil.

### Reserva y pagos

- Disponibilidad real por servicio, profesional y duración.
- Bloqueo temporal del horario durante el checkout.
- Pago total o anticipo con pasarela colombiana (Wompi o Bold como primera opción).
- Webhook de confirmación: pago aprobado → cita confirmada y horario bloqueado.
- Correo de confirmación automático y archivo `.ics` para el calendario.
- Recordatorio por correo 24 h antes.
- Cancelación/reprogramación según política.

### Panel administrativo

- Agenda diaria y semanal por profesional.
- Crear, mover, confirmar, cancelar y marcar asistencia.
- Catálogo de servicios, profesionales y horarios.
- Ficha de cliente con historial de citas y notas.
- Cierre de caja diario: ingresos, gastos, pagos electrónicos y efectivo.
- Tablero: citas del día, ingresos del día, ocupación, no-show.

### Técnico

- API REST documentada con OpenAPI.
- Roles: `client`, `staff`, `admin`.
- Base de datos relacional con migraciones.
- Pruebas de dominio y de los flujos críticos (reserva, pago, cancelación).
- CI/CD y entornos de staging y producción.

**Duración estimada:** 8–12 semanas de trabajo parcial de dos personas.

## 3. Fase 2 — CRM y control financiero

- Recordatorios por WhatsApp (API oficial de Meta) además de correo.
- Segmentación de clientes: frecuentes, inactivos, cumpleaños, alto valor.
- Campañas de reactivación y mensajes de cumpleaños.
- Programa de puntos, niveles o referidos.
- Tarjetas de regalo y bonos.
- Comisiones de profesionales y liquidación.
- Gastos por categoría, cuentas por pagar y pago a proveedores.
- Inventario de productos, consumo por servicio y alertas de stock.
- Reportes avanzados: ticket promedio, retención, LTV, ocupación, márgenes, flujo de caja.
- Exportación a Excel/CSV e integración con software contable.

**Duración estimada:** 6–10 semanas adicionales.

## 4. Fase 3 — Escala

- Facturación electrónica DIAN integrada.
- Multi-sede y comparación entre sedes.
- Integración con contabilidad (Siigo, Alegra, World Office).
- Automatización de marketing y encuestas post-servicio.
- App móvil o PWA para el equipo.
- Portal de proveedores.

## 5. Fuera de alcance (por ahora)

- Nómina completa y liquidación laboral.
- Contabilidad formal con estados financieros auditables.
- Facturación electrónica propia (se integra con un proveedor autorizado).
- Banca en línea o dispersión de pagos.
- Chatbot de atención al cliente.
- Multi-país o multi-moneda.

## 6. Decisiones que bloquean el diseño

| Decisión | Impacto | Responsable |
|---|---|---|
| Pasarela de pago (Wompi, Bold, Mercado Pago, PayU) | Checkout, webhooks, conciliación | Cliente |
| Porcentaje de anticipo y reembolsos | Reglas de negocio y estados | Cliente |
| Confirmación automática vs. aprobación manual | Flujo de reserva | Cliente |
| Política de cancelación y no-show | Reglas y mensajes | Cliente |
| Facturación electrónica: integrar o emitir aparte | Alcance de Fase 1/2 | Cliente + contador |
| Alcance de "gestión del dinero" | Módulo financiero | Cliente |
| Roles y permisos | Seguridad y auditoría | Cliente |

## 7. Implicaciones técnicas de los pagos

- Usar **checkout hospedado** de la pasarela para no manejar datos de tarjeta (reduce PCI).
- Verificar la firma de los **webhooks** y procesar con **idempotencia**.
- Guardar `payment_id`, estado, monto, comisión y referencia de la cita.
- Manejar estados: `pending`, `approved`, `declined`, `voided`, `refunded`.
- Liberar el horario si el pago no se completa dentro de la ventana de bloqueo.
- Conciliar pagos electrónicos con el cierre de caja.
- Probar todo en sandbox antes de producción.

## 8. Criterios de aceptación de la Fase 1

- [ ] Un visitante puede reservar y pagar sin intervención del salón.
- [ ] El horario no se puede vender dos veces.
- [ ] El pago aprobado confirma la cita y envía el correo en menos de 1 minuto.
- [ ] Un pago rechazado libera el horario.
- [ ] El salón puede ver y gestionar la agenda del día desde el celular.
- [ ] El cierre de caja cuadra con los pagos electrónicos y el efectivo.
- [ ] El tablero muestra citas, ingresos, ocupación y no-show del día.
- [ ] Los datos personales se tratan con autorización y política publicada.
- [ ] El sistema tiene pruebas automatizadas y despliegue reproducible.

## 9. Qué comunicar al cliente

1. Entendemos el pedido completo y lo vamos a construir, pero **por etapas**.
2. La Fase 1 resuelve lo que más duele: reserva real, pago, confirmación y agenda.
3. La Fase 2 convierte el panel en un CRM/ERP operativo.
4. La Fase 3 escala el negocio (facturación, multi-sede, contabilidad).
5. Necesitamos sus respuestas al cuestionario y los documentos para cerrar fechas y costos.
6. Cada etapa termina con criterios de aceptación verificables y capacitación.
