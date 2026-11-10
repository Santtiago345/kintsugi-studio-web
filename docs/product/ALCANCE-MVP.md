# Alcance por etapas — Kintsugi Studio Web

> Documento de trabajo para ordenar el alcance solicitado (web + reservas + CRM + ERP).
> No es una propuesta comercial: sirve para decidir qué entra primero.
>
> **Actualización (10 de noviembre de 2026):** este documento se alineó con el alcance
> confirmado del [README](../../README.md) y de [`RESPUESTAS-CLIENTE.md`](../discovery/RESPUESTAS-CLIENTE.md).
> Antes describía pagos y cierre de caja dentro de la Fase 1; ambos quedaron fuera del MVP.
> Fases definitivas:
> **1)** sitio, catálogo, reserva real, agenda, CRM e inventario;
> **2)** recordatorios, caja, gastos, reportes, comisiones, tarjetas, proveedores y cuentas por pagar;
> **3)** pagos en línea, confirmación automática, facturación electrónica, multi-sede y contabilidad.

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
**entregar primero el núcleo que genera valor y riesgo** (reserva real + agenda + ficha del
cliente + inventario) y ampliar por etapas. Intentar todo de una vez pone en riesgo la calidad,
la fecha y la confianza del cliente.

## 2. Fase 1 — Núcleo operativo (MVP)

**Objetivo:** que un cliente pueda reservar en línea y que el salón opere el día con una agenda
confiable, historial de clientes e inventario, sin depender de Excel.

### Sitio público

- Inicio, servicios, filosofía, galería, contacto y políticas.
- Diseño con los tokens del manual de marca (negro, oro, champagne, perla, grafito).
- Responsive y optimizado para móvil.
- Catálogo de **72 servicios** con precio fijo, "desde" o rango, y profesional habilitado.

### Reserva

- Disponibilidad real por servicio, profesional y duración.
- Bloqueo temporal del horario mientras el cliente completa la reserva.
- Prevención de solapamientos y revalidación transaccional del horario.
- Cita creada en estado `pending`; el salón la confirma según su política.
- Correo de confirmación y archivo `.ics` para el calendario.
- Reprogramación y cancelación dentro de la política (máximo 12 h antes, una vez).
- Canal de reserva como invitado y, si se decide, cuenta mínima del cliente.

### Panel administrativo

- Agenda diaria y semanal por profesional.
- Crear, mover, confirmar, cancelar y marcar asistencia/no-show.
- Catálogo de servicios, profesionales, horarios y excepciones.
- Ficha de cliente con historial, fotos, fórmulas, notas y alergias.
- Detección de clientes duplicados.
- Inventario de productos: entradas, salidas y ajustes.
- Tablero diario: citas, ocupación y no-show.
- Roles y permisos (operario, administrador, profesional, cliente).
- Auditoría interna de cambios sensibles.

### Técnico

- API REST documentada con OpenAPI.
- Roles: `client`, `professional`, `admin`, `operator`.
- Base de datos relacional con migraciones.
- Pruebas de dominio y de los flujos críticos (reserva, reprogramación, cancelación).
- CI/CD y entornos de staging y producción.

**Duración estimada:** 4–6 semanas de trabajo parcial de dos personas.

## 3. Fase 2 — CRM y control financiero

- Recordatorios por WhatsApp (API oficial de Meta) además de correo.
- Segmentación de clientes: frecuentes, inactivos, cumpleaños, alto valor, nuevos.
- Campañas de reactivación y mensajes de cumpleaños.
- Programa de referidos (5.000 COP por referido; 20.000 COP a los 3).
- Tarjetas de regalo y bonos.
- Encuesta de satisfacción.
- **Cierre de caja diario** e ingresos/gastos por categoría.
- **Comisiones de profesionales** (55 % / 60 %) y liquidación semanal.
- Gastos por categoría, cuentas por pagar y pago a proveedores.
- Nómina, impuestos, metas mensuales y conciliación bancaria.
- Reportes avanzados: ticket promedio, retención, LTV, ocupación, márgenes, flujo de caja.
- Exportación a Excel/CSV e integración con software contable.

**Duración estimada:** 5–7 semanas adicionales.

## 4. Fase 3 — Escala

- Pago o anticipo en línea con pasarela colombiana (Wompi/Bold).
- Confirmación automática de la cita.
- Facturación electrónica DIAN integrada.
- Multi-sede y comparación entre sedes.
- Integración con contabilidad (Siigo, Alegra, World Office).
- Automatización de marketing.
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
| Pasarela de pago (Wompi, Bold, Mercado Pago, PayU) | Checkout, webhooks, conciliación (Fase 3) | Cliente |
| Porcentaje de anticipo y reembolsos | Reglas de negocio y estados | Cliente |
| Portal del cliente: invitado vs cuenta | Flujo de reserva y reprogramación | Equipo + cliente |
| Política de cancelación y no-show | Reglas y mensajes | Cliente |
| Facturación electrónica: integrar o emitir aparte | Alcance de Fase 2/3 | Cliente + contador |
| Roles y permisos | Seguridad y auditoría | Cliente |
| Duraciones estándar por servicio | Motor de disponibilidad | Cliente |

## 7. Implicaciones técnicas de los pagos (preparación para Fase 3)

- Usar **checkout hospedado** de la pasarela para no manejar datos de tarjeta (reduce PCI).
- Verificar la firma de los **webhooks** y procesar con **idempotencia**.
- Guardar `payment_id`, estado, monto, comisión y referencia de la cita.
- Manejar estados: `pending`, `approved`, `declined`, `voided`, `refunded`.
- Liberar el horario si el pago no se completa dentro de la ventana de bloqueo.
- Conciliar pagos electrónicos con el cierre de caja.
- Probar todo en sandbox antes de producción.

> En el MVP el pago se registra manualmente en el panel; el adaptador de pasarela queda
> definido pero sin integrar hasta que el cliente confirme la prioridad.

## 8. Criterios de aceptación de la Fase 1

- [ ] Un visitante puede reservar sin intervención del salón.
- [ ] El horario no se puede vender dos veces.
- [ ] La cita queda `pending` y el salón puede confirmarla o rechazarla.
- [ ] Reprogramar o cancelar dentro de las 12 h se rechaza con explicación de la política.
- [ ] El salón puede ver y gestionar la agenda del día desde el celular.
- [ ] La ficha del cliente guarda historial, fotos, fórmulas y notas.
- [ ] El sistema advierte duplicados por teléfono, correo o documento.
- [ ] El inventario registra entradas, salidas y ajustes.
- [ ] El tablero muestra citas, ocupación y no-show del día.
- [ ] Los datos personales se tratan con autorización y política publicada.
- [ ] El sistema tiene pruebas automatizadas y despliegue reproducible.

## 9. Qué comunicar al cliente

1. Entendemos el pedido completo y lo vamos a construir, pero **por etapas**.
2. La Fase 1 resuelve lo que más duele: reserva real, agenda, historial e inventario.
3. La Fase 2 convierte el panel en un CRM/ERP operativo.
4. La Fase 3 escala el negocio (pagos, facturación, multi-sede, contabilidad).
5. Necesitamos sus respuestas y documentos para cerrar fechas y costos.
6. Cada etapa termina con criterios de aceptación verificables y capacitación.
