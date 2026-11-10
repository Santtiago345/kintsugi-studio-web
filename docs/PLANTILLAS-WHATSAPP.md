# Plantillas y políticas de WhatsApp — Kintsugi Studio

> **Fuente:** mensajes entregados por el cliente (Nicolle) para la confirmación de reservas y
> la asignación de servicios a profesionales.
> **Última actualización:** 9 de noviembre de 2026.
> **Canal:** WhatsApp Business Cloud API, número **313 206 5167**.
>
> Este documento fija el **texto base**, las **variables**, las **políticas de servicio** y las
> reglas técnicas para enviar los mensajes desde la plataforma. Los textos son la versión
> aprobada por el cliente; los cambios de redacción deben volver a él.

## 1. Resumen

| Plantilla | Destinatario | Cuándo se envía | Categoría Cloud API |
|---|---|---|---|
| `resumen_reserva` | Cliente | Al confirmar la cita | `UTILITY` |
| `asignacion_servicio` | Profesional | Al asignar la cita | `UTILITY` |

Ambas plantillas son **transaccionales**: no son publicidad y no requieren consentimiento de
marketing, pero sí requieren que el cliente haya iniciado la conversación o haya dado su número
al reservar.

## 2. Políticas de servicio

Estas políticas están escritas dentro del mensaje de reserva y por lo tanto son **compromisos
del negocio**, no solo texto informativo. El producto debe hacerlas cumplir en la agenda y en
la ficha de la cita.

| # | Política | Regla operativa | Dónde se aplica |
|---|---|---|---|
| P1 | **Reprogramación** | Máximo **12 horas antes** de la cita. Una sola reprogramación por cita. | Reserva, portal del cliente y panel. |
| P2 | **Tolerancia de espera** | **5 minutos**. Pasado ese tiempo, la cita puede pasar a otro especialista o cancelarse. | Agenda y check-in. |
| P3 | **Garantía** | **5 días** posteriores al servicio. | Ficha de la cita y postventa. |
| P4 | **Mascotas** | No se permite el ingreso de mascotas. | Sitio público, confirmación y aviso en el salón. |
| P5 | **Menores** | No se permite el ingreso de menores de **7 años**. | Sitio público y confirmación. |
| P6 | **Abono** | El abono **no es reembolsable**. | Checkout y política de cancelación. |
| P7 | **Precio variable** | El valor cotizado puede cambiar si se agrega o modifica un servicio. | Cotización y confirmación. |
| P8 | **Asignación** | El profesional recibe un mensaje cuando se le asigna un servicio. | Agenda y notificaciones. |

### 2.1 Implicaciones para el producto

1. **La reprogramación debe bloquearse** en la interfaz cuando falten menos de 12 horas; el
   backend también debe rechazarla (no confiar solo en el frontend).
2. **El check-in debe registrar la hora de llegada** para poder medir la tolerancia de 5 minutos
   y dejar trazabilidad de la reasignación o cancelación.
3. **La garantía de 5 días** debe crear una ventana visible en la ficha de la cita, con la
   posibilidad de registrar un retrabajo sin costo.
4. **El abono no reembolsable** debe mostrarse antes de pagar y quedar aceptado en el checkout.
5. **El precio variable** obliga a separar *valor cotizado* de *valor final cobrado*; el mensaje
   nunca debe prometer un precio cerrado cuando el servicio es “desde”.
6. **La asignación** requiere que la cita tenga uno o varios profesionales antes de disparar el
   mensaje.

## 3. Plantilla `resumen_reserva`

**Destinatario:** cliente.
**Disparador:** cita creada y confirmada (o cita con abono aprobado).
**Categoría:** `UTILITY`.
**Idioma:** `es_CO` (o `es` si Meta no tiene la variante regional).

### 3.1 Texto aprobado

```text
¡Hola {{1}}! 💛 Tu cita en Kintsugi Studio quedó agendada.

📋 Servicio: {{2}}
⏱️ Duración: {{3}}
📅 Fecha: {{4}}
🕐 Hora: {{5}}
💵 Valor cotizado: {{6}}
💰 Abono: {{7}}
👩‍🎨 Especialistas: {{8}}

Ten en cuenta:
• Puedes reprogramar máximo 12 horas antes.
• La tolerancia de espera es de 5 minutos; después de ese tiempo la cita puede pasar a otro especialista o cancelarse.
• Garantía de 5 días posteriores al servicio.
• No se permite el ingreso de mascotas.
• No se permite el ingreso de menores de 7 años.
• El abono no es reembolsable.
• El precio puede variar si se agrega o modifica un servicio.

Si necesitas cambiar algo, escríbenos por este mismo chat.
```

### 3.2 Variables

| Variable | Campo del producto | Ejemplo | Regla |
|---|---|---|---|
| `{{1}}` | `client.first_name` | `Ana` | Nombre corto, sin apellidos. |
| `{{2}}` | `appointment.items[]` | `Semipermanente + retiro` | Servicios separados por ` + `. |
| `{{3}}` | `appointment.duration_minutes` | `2 h 30 min` | Formato legible, no minutos crudos. |
| `{{4}}` | `appointment.date` | `sábado 15 de noviembre` | Fecha local de Bogotá. |
| `{{5}}` | `appointment.start_time` | `9:00 a. m.` | Hora local de Bogotá. |
| `{{6}}` | `appointment.quoted_total` | `$145.000` | COP con separador de miles. |
| `{{7}}` | `appointment.deposit_amount` | `$30.000` | Si no hay abono: `Sin abono`. |
| `{{8}}` | `appointment.professionals[]` | `Nico` | Nombres visibles, separados por coma. |

### 3.3 Reglas de composición

- Si el servicio es de precio **“desde”**, `{{6}}` debe decir `Desde $X` y no un valor cerrado.
- Si la cita tiene **varios servicios**, `{{2}}` los lista todos y `{{6}}` es la suma cotizada.
- Si la cita todavía no tiene profesional, `{{8}}` debe decir `Por asignar`; el mensaje de
  asignación se envía cuando se defina.
- El mensaje no debe incluir dirección, RUT ni datos bancarios; eso vive en el sitio y en los
  términos y condiciones.
- El texto no promete disponibilidad: la cita ya está creada.

### 3.4 Botones propuestos

| Botón | Tipo | Acción |
|---|---|---|
| `Confirmar asistencia` | Quick reply | Marca la cita como confirmada por el cliente. |
| `Reprogramar` | Quick reply | Abre el portal o crea una solicitud de cambio. |
| `Ver mi cita` | URL | Abre el detalle en el portal del cliente. |

> Los botones requieren aprobación de la plantilla en Meta. Si no se aprueban, el mensaje se
> envía sin botones y las acciones se resuelven por texto.

## 4. Plantilla `asignacion_servicio`

**Destinatario:** profesional.
**Disparador:** cita asignada o reasignada a un profesional.
**Categoría:** `UTILITY`.
**Idioma:** `es_CO`.

### 4.1 Texto aprobado

```text
¡Hola {{1}}! Tienes un nuevo servicio asignado.

📅 Fecha: {{2}}
🕐 Hora: {{3}}
⏱️ Duración: {{4}}
👤 Cliente: {{5}}
💅 Servicio: {{6}}
📝 Notas: {{7}}

Por favor revisa tu agenda y confirma que puedes atenderlo.
```

### 4.2 Variables

| Variable | Campo del producto | Ejemplo | Regla |
|---|---|---|---|
| `{{1}}` | `professional.first_name` | `Nico` | Nombre corto. |
| `{{2}}` | `appointment.date` | `sábado 15 de noviembre` | Fecha local. |
| `{{3}}` | `appointment.start_time` | `9:00 a. m.` | Hora local. |
| `{{4}}` | `appointment.duration_minutes` | `2 h 30 min` | Formato legible. |
| `{{5}}` | `client.display_name` | `Ana P.` | Nombre y apellido inicial. |
| `{{6}}` | `appointment.items[]` | `Semipermanente + retiro` | Servicios separados por ` + `. |
| `{{7}}` | `appointment.notes` | `Uñas frágiles, sin lima eléctrica` | Si no hay notas: `Sin observaciones`. |

### 4.3 Reglas de composición

- **No incluir el valor del servicio** en el mensaje al profesional: su comisión se calcula en
  la liquidación semanal y no debe filtrarse por chat.
- **No incluir teléfono ni dirección del cliente.**
- Si la cita se **reasigna**, se envía el mismo mensaje al nuevo profesional y un aviso de
  cancelación al anterior.
- Si la cita se **cancela**, se envía un mensaje de cancelación (pendiente de plantilla) al
  profesional.

## 5. Mensajes previstos (pendientes de aprobación)

La plataforma necesitará más mensajes que los dos entregados. Quedan aquí como propuesta, **sin
implementar hasta que el cliente apruebe el texto**:

| Mensaje | Destinatario | Fase | Notas |
|---|---|---|---|
| Recordatorio de cita | Cliente | 2 | Ventana pendiente de definir (24 h o 48 h antes). |
| Cancelación de cita | Cliente y profesional | 2 | Debe explicar la política de abono. |
| Cumpleaños | Cliente | 2 | Una semana antes, con bono del 10 %. |
| Encuesta de satisfacción | Cliente | 2 | Posterior al servicio. |
| Confirmación de abono | Cliente | 3 | Cuando se habilite el pago en línea. |
| Recibo o factura | Cliente | 3 | Cuando se habilite facturación electrónica. |

## 6. Reglas de implementación

### 6.1 Ventana de conversación

- Fuera de la ventana de 24 horas de servicio al cliente, **solo se pueden enviar plantillas
  aprobadas**.
- Dentro de la ventana, se puede responder en texto libre.
- El sistema debe registrar la última interacción del cliente para saber si la ventana está
  abierta.

### 6.2 Consentimiento y opt-in

- El número se captura en la reserva con una casilla explícita de aceptación.
- Los mensajes `UTILITY` se envían sobre la relación contractual de la cita.
- Los mensajes de marketing (cumpleaños, promociones) requieren **opt-in separado**.
- El cliente puede responder `BAJA` para dejar de recibir marketing; el sistema debe respetarlo.

### 6.3 Datos y privacidad

- Las plantillas viven en la base de datos como `NotificationTemplate` con `name`, `language`,
  `body`, `variables` y `status`.
- Cada envío se registra en `NotificationLog` con cita, destinatario, plantilla, estado,
  `provider_message_id` y error.
- **No se registran conversaciones completas** en el repositorio ni en logs; solo metadatos.
- Los datos personales se conservan un año, salvo obligación legal contable.

### 6.4 Reintentos y fallback

- Si WhatsApp falla, se reintenta con backoff exponencial (máximo 3 intentos).
- Si sigue fallando, se envía correo transaccional como respaldo y se marca la cita con alerta.
- Los errores 131026 (número inválido) y 131047 (fuera de ventana) deben quedar visibles en el
  panel para corrección manual.

### 6.5 Formato de valores

| Dato | Formato |
|---|---|
| Dinero | `$145.000` (COP, separador de miles con punto). |
| Fecha | `sábado 15 de noviembre` (sin año salvo que sea otro año). |
| Hora | `9:00 a. m.` / `2:30 p. m.` (12 h, hora de Bogotá). |
| Duración | `2 h 30 min`; menos de una hora: `45 min`. |
| Servicios | `Semipermanente + retiro` (separador ` + `). |

## 7. Modelo de datos asociado

| Entidad | Campos mínimos |
|---|---|
| `NotificationTemplate` | `code`, `channel`, `language`, `category`, `body`, `variables`, `status`, `approved_at`. |
| `NotificationLog` | `template`, `appointment`, `recipient_type`, `recipient_id`, `status`, `provider_message_id`, `error_code`, `sent_at`. |
| `CommunicationConsent` | `client`, `channel`, `marketing_opt_in`, `source`, `created_at`, `revoked_at`. |
| `Appointment` | `date`, `start_time`, `duration_minutes`, `quoted_total`, `deposit_amount`, `notes`. |

## 8. Pendientes

- [ ] Confirmar la ventana del recordatorio de cita (24 h o 48 h antes).
- [ ] Aprobar los textos de recordatorio, cancelación, cumpleaños y encuesta.
- [ ] Confirmar si el mensaje de reserva debe llevar botones y cuáles.
- [ ] Confirmar el tratamiento del abono cuando la cita se cancela con menos de 12 horas.
- [ ] Definir qué pasa si el cliente no confirma asistencia.
- [ ] Confirmar si el profesional recibe también un resumen diario de su agenda.
- [ ] Validar la categoría `UTILITY` de ambas plantillas en Meta antes de producción.
