# Kintsugi Studio — Sitio web

Sitio web oficial y sistema de reservas de **Kintsugi Studio**, estudio de belleza en Bogotá.

**Equipo:** Santiago Neuta · David Mateo Ballesteros Ballesteros
**Estado:** descubrimiento y definición

---

## Español

Kintsugi Studio es un estudio de belleza y transformación inspirado en el arte japonés del
kintsugi: reparar las grietas con oro para reconocer el valor de la historia. Este proyecto
construye su presencia digital: un sitio público para descubrir los servicios y reservar,
más un panel interno para administrar la agenda del salón.

La identidad visual del producto sigue el manual de marca del estudio: negro profundo,
oro Kintsugi, champagne, blanco perla y grafito; tipografías Montserrat, Cormorant Garamond
y Great Vibes; una dirección visual de lujo, cálida y cercana.

### Alcance

- Sitio público: inicio, servicios, filosofía, galería, contacto y reserva en línea.
- Reserva de citas con disponibilidad por profesional y validación de solapamientos.
- Panel del salón: agenda, citas, servicios, horarios, clientes y notificaciones.
- API REST documentada, base de datos relacional y autenticación por roles.
- Pruebas automatizadas e integración continua.

### Documentación

- [Brief del proyecto](docs/PROYECTO-KINTSUGI.md) — negocio, marca, alcance, actores, reglas y preguntas al cliente.
- [Decisión de stack](docs/DECISION-STACK.md) — opciones evaluadas, matriz y recomendación.
- [Índice de documentación](docs/README.md).

## English

Official website and appointment-management system for **Kintsugi Studio**, a beauty studio
in Bogotá, Colombia. The product includes a public site with online booking and an internal
panel to manage the salon's schedule, services, and clients.

Built with a documented REST API, a relational database, role-based authentication,
automated tests, and continuous integration.

### Repository layout

```
.
├── docs/          # Product documentation: brief, stack, architecture, API, database
├── backend/       # REST API, domain logic, database, tests (planned)
├── frontend/      # Public website + staff panel (planned)
├── .github/       # CI/CD workflows (planned)
└── README.md
```

### Roadmap

1. Client discovery: services, prices, schedule, booking rules, brand assets.
2. Requirements and scope: user stories, acceptance criteria, MVP definition.
3. Domain and data model: entities, relationships, booking rules.
4. Architecture and API contract.
5. Implementation: backend, database, frontend.
6. Quality: automated tests and CI pipeline.
7. Launch and handover.

## License

Proprietary. Brand assets belong to Kintsugi Studio.
