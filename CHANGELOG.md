# Changelog

Todos los cambios relevantes del proyecto se registran en este archivo.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [No publicado]

### Añadido

- Estructura inicial de carpetas de documentación: `product/`, `discovery/`, `operations/`,
  `architecture/` y `design/`.
- Documento maestro de estado y rumbo (`docs/product/ESTADO-PROYECTO.md`).
- Duraciones estándar por servicio en la columna `Duración` del catálogo
  (`docs/operations/DATOS-EXCEL.md`), recibidas del cliente el 10/11/2026.
- `LICENSE`, `CONTRIBUTING.md` y `.editorconfig`.

### Cambiado

- El catálogo de servicios ahora registra la duración por servicio; los rangos se modelan como
  mínimo y máximo y la agenda reserva el límite superior.
- Se documentaron como pendientes las duraciones de adicionales de uñas y de maquillaje
  social/quinceañera/novia.
- `docs/README.md` se renombró a `docs/INDEX.md` para dejar un único `README.md` en la raíz.
- `docs/DISENO-UI.md` se movió a `docs/design/DISENO-UI.md`.
- `frontend/prototype/README.md` se renombró a `frontend/prototype/GUIA.md` para mantener un
  único `README.md` en el repositorio.
- El alcance del MVP se alineó con las respuestas del cliente: pagos en línea al roadmap y
  cierre de caja a la Fase 2.

## [2026-11-10]

### Añadido

- Prototipo de interfaz navegable con ocho pantallas en `frontend/prototype/`.
- Sistema de diseño y especificación de pantallas en `docs/design/DISENO-UI.md`.
- Capturas de referencia en `docs/assets/ui/`.

## [2026-11-09]

### Añadido

- Análisis de los Excel del negocio: catálogo de 72 servicios, agenda, descansos, comisiones y
  liquidación.
- Plantillas y políticas de WhatsApp.

## [2026-11-08]

### Cambiado

- README actualizado con el alcance confirmado del cliente y el stack decidido.

## [2026-11-06]

### Añadido

- Inicialización del repositorio.
- Cuestionario de descubrimiento y alcance por etapas.
