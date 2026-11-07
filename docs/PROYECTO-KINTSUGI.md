# Brief del proyecto — Kintsugi Studio Web

> Fuente principal: manual de identidad visual de Kintsugi Studio (documento del cliente).
> Estado: **descubrimiento**. Todo lo marcado como supuesto debe validarse con el cliente.

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

## 3. Alcance tentativo del producto

### Sitio público (visitantes)

1. **Inicio** con propuesta de valor, servicios destacados y prueba social.
2. **Servicios** con descripción, duración y precio (si el cliente lo autoriza).
3. **Nosotros / filosofía kintsugi** y presentación del equipo.
4. **Galería** de resultados (antes/después con autorización).
5. **Reserva de cita** en línea.
6. **Contacto**: WhatsApp, ubicación, horarios, redes.
7. **Políticas**: cancelación, privacidad, tratamiento de datos.

### Panel del salón (staff)

1. Agenda diaria/semanal por profesional.
2. Gestión de citas: confirmar, reprogramar, cancelar, marcar asistencia.
3. Catálogo de servicios: precio, duración, profesional habilitado.
4. Horarios y bloqueos (almuerzo, festivos, vacaciones).
5. Clientes e historial de visitas.
6. Notificaciones/recordatorios (correo o WhatsApp).
7. Reportes básicos: citas por período, ocupación, servicios más pedidos.

### Back-office técnico

- Django Admin para contenido y operación.
- API REST documentada (OpenAPI/Swagger).
- Autenticación con roles: `client`, `staff`, `admin`.

## 4. Actores

| Actor | Necesidad |
|---|---|
| Visitante | Conocer el estudio y reservar sin fricción |
| Cliente | Reservar, reprogramar, cancelar y ver su historial |
| Estilista / profesional | Ver su agenda y marcar asistencia |
| Recepción / administrador | Gestionar agenda, servicios, clientes y disponibilidad |
| Dueño/a | Ver métricas y mantener la identidad de marca |
| Sistema de notificaciones | Enviar confirmaciones y recordatorios |

## 5. Reglas de negocio probables (por validar)

- Una cita ocupa un bloque de duración del servicio + margen de limpieza/alistamiento.
- No se puede agendar sobre un bloque ocupado del mismo profesional.
- La cita debe estar dentro del horario de atención y no en un bloqueo.
- Cancelación permitida hasta N horas antes (definir N).
- Un cliente no puede tener dos citas solapadas.
- Estados: `pending → confirmed → completed`; `cancelled` y `no_show` como salidas.
- Recordatorio X horas antes; confirmación inmediata al agendar.
- Datos personales tratados según Ley 1581 de 2012 (autorización explícita).

## 6. Supuestos actuales

1. Un solo local (Calle 68 sur).
2. Reserva online **sin pago en línea** en el MVP; el salón confirma.
3. Notificaciones por correo en el MVP; WhatsApp queda como evolución.
4. Varios profesionales, cada uno con su propia agenda.
5. Los precios se publican.
6. El contenido (fotos, textos) lo administra el salón.

## 7. Preguntas para el cliente

1. ¿Qué servicios ofrecen exactamente (nombre, duración, precio, profesional)?
2. ¿Cuál es el horario real de atención por día y por profesional?
3. ¿Cómo agendan hoy? (WhatsApp, llamadas, cuaderno, Instagram)
4. ¿Qué duele más del proceso actual? (doble reserva, olvidos, cancelaciones, desorden)
5. ¿Quieren que el cliente pague o abone algo al reservar?
6. ¿Prefieren confirmación automática o que el salón apruebe cada cita?
7. ¿Qué recordatorio funciona mejor para sus clientes: WhatsApp, correo o ambos?
8. ¿Cuántas personas usan la agenda y desde qué dispositivos (celular/PC)?
9. ¿Tienen fotos profesionales y autorización de las clientas para publicarlas?
10. ¿Ya tienen dominio, hosting o cuenta de correo? ¿Quién los administra?
11. ¿Manejan promociones, combos, bonos o membresías?
12. ¿Qué reportes necesitan ver cada mes?

## 8. Riesgos del proyecto

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Alcance crece (pagos, chatbot, multi-sede) | Alto | MVP cerrado por escrito; lo demás al backlog |
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
