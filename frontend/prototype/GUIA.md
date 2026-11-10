# Prototipo de frontend — Kintsugi Studio

Prototipo estático y navegable del sitio público, el flujo de reserva y el panel
administrativo. Es la base visual para la implementación en Next.js + Tailwind CSS.

## Ejecutar

```bash
cd frontend/prototype
python -m http.server 8765
```

Abrir <http://127.0.0.1:8765/index.html>.

También se puede abrir `index.html` directamente en el navegador.

## Pantallas

| Pantalla | URL |
|---|---|
| Inicio | `index.html#home` |
| Servicios | `index.html#services` |
| Reserva — paso 1 | `index.html#booking-service` |
| Reserva — paso 2 | `index.html#booking-datetime` |
| Reserva — paso 3 | `index.html#booking-confirm` |
| Agenda administrativa | `index.html#admin-agenda` |
| Ficha de clienta | `index.html#admin-client` |
| Cierre de caja | `index.html#admin-cash` |

Las capturas de referencia están en [`docs/assets/ui/`](../../docs/assets/ui/).

## Archivos

| Archivo | Contenido |
|---|---|
| `index.html` | Las ocho pantallas, el sprite de iconos y el marcado compartido. |
| `styles.css` | Tokens de marca, componentes, layouts y responsive. |
| `app.js` | Router por hash, filtros de categorías y selección de horarios/días. |

## Alcance

- Es un prototipo de diseño, no la aplicación funcional.
- Los datos son de ejemplo; no hay backend ni persistencia.
- Las duraciones de los servicios son supuestos hasta que la clienta las confirme.
- La fotografía se representa con placeholders abstractos; producción usará fotografía
  autorizada de antes y después.

## Referencias

- [`docs/design/DISENO-UI.md`](../../docs/design/DISENO-UI.md) — sistema de diseño, principios UX y
  especificación de pantallas.
- [`docs/operations/DATOS-EXCEL.md`](../../docs/operations/DATOS-EXCEL.md) — catálogo, agenda y reglas operativas.
