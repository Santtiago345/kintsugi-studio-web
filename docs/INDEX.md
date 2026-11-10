# Índice de documentación — Kintsugi Studio Web

Este directorio concentra la documentación del producto. El punto de entrada del repositorio
es el [`README.md`](../README.md) de la raíz.

## Estructura

| Carpeta | Contenido |
|---|---|
| [`product/`](product/) | Estado, alcance por etapas y brief del producto. |
| [`discovery/`](discovery/) | Cuestionario y respuestas del cliente que originaron el alcance. |
| [`operations/`](operations/) | Datos operativos de los Excel y plantillas/políticas de WhatsApp. |
| [`architecture/`](architecture/) | Decisiones técnicas, stack y arquitectura. |
| [`design/`](design/) | Sistema visual, pantallas y prototipo de interfaz. |

## Documentos

### Producto

| Documento | Contenido |
|---|---|
| [Estado y rumbo](product/ESTADO-PROYECTO.md) | Documento maestro: estado, decisiones cerradas, inconsistencias, pendientes y plan de ejecución. |
| [Alcance por etapas](product/ALCANCE-MVP.md) | MVP, fases 2 y 3, fuera de alcance, decisiones y criterios de aceptación. |
| [Brief del proyecto](product/PROYECTO-KINTSUGI.md) | Negocio, identidad de marca, actores, reglas, supuestos y riesgos. |

### Diseño

| Documento | Contenido |
|---|---|
| [Diseño de interfaz](design/DISENO-UI.md) | Sistema visual, principios UX, arquitectura de información, pantallas y prototipo navegable. |

### Descubrimiento

| Documento | Contenido |
|---|---|
| [Respuestas del cliente](discovery/RESPUESTAS-CLIENTE.md) | Datos confirmados, alcance, reglas, roles, finanzas, MoSCoW y pendientes. |
| [Cuestionario para el cliente](discovery/CUESTIONARIO-CLIENTE.md) | Preguntas de descubrimiento que originaron las respuestas. |

### Operación

| Documento | Contenido |
|---|---|
| [Datos operativos de los Excel](operations/DATOS-EXCEL.md) | Catálogo de 72 servicios, agenda, descansos, comisiones y liquidación. |
| [Plantillas y políticas de WhatsApp](operations/PLANTILLAS-WHATSAPP.md) | Textos de reserva y asignación, variables, políticas y reglas de implementación. |

### Arquitectura

| Documento | Contenido |
|---|---|
| [Decisión de stack](architecture/DECISION-STACK.md) | Alternativas evaluadas, matriz de decisión, decisión final, costos y configuración. |

## Documentos previstos

A medida que avance el proyecto se agregarán, en estas mismas carpetas o en nuevas:

- `requirements/` — requisitos funcionales y no funcionales, historias de usuario y criterios de aceptación.
- `api/` — contrato REST y ejemplos de uso.
- `database/` — modelo relacional y migraciones.
- `testing/` — estrategia, cobertura y evidencias.
- `deployment/` — entornos, CI/CD y operación.

## Convenciones

- Idioma de trabajo: español.
- Código, nombres de entidades y mensajes de commit: inglés.
- Diagramas en Mermaid dentro de los documentos, para que se versionen como texto.
- Toda decisión técnica relevante se registra con su justificación y alternativas.
- Un solo `README.md` por repositorio (la raíz); los índices se llaman `INDEX.md`.
