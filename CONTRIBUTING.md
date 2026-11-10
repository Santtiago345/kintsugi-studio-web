# Contribución — Kintsugi Studio Web

Guía breve para mantener el repositorio consistente entre los dos integrantes del equipo.

## 1. Estructura

- `README.md` es el **único README** del repositorio. No crear otros `README.md`.
- Los índices de documentación se llaman `INDEX.md`.
- La documentación vive en `docs/` y se agrupa por propósito (`product/`, `discovery/`,
  `operations/`, `architecture/`).
- El código vivirá en `backend/` y `frontend/`; la infraestructura y CI/CD en `.github/`.

## 2. Ramas

| Rama | Uso |
|---|---|
| `main` | Versión estable y desplegable. |
| `feat/<tema>` | Nueva funcionalidad. |
| `fix/<tema>` | Corrección de errores. |
| `docs/<tema>` | Cambios de documentación. |
| `chore/<tema>` | Mantenimiento, dependencias o configuración. |

Los cambios llegan a `main` mediante pull request con al menos una revisión cruzada.

## 3. Commits

Se usa **Conventional Commits** en inglés:

```
feat: add availability engine
fix: prevent overlapping appointments
docs: reorganize documentation by domain
test: cover reschedule policy
chore: add CI workflow
```

Reglas:

- Un commit por cambio lógico.
- Mensaje en imperativo y en inglés.
- No incluir secretos, credenciales ni datos personales.

## 4. Documentación

- Idioma de trabajo: **español**.
- Entregables académicos: **inglés**, en `_local/` (fuera del repositorio).
- Diagramas en **Mermaid** dentro del Markdown.
- Identificadores estables: `RF-01`, `RNF-01`, `BR-01`, `US-01`, `AC-01`.
- Nombres de clases y tablas iguales en UML, ER y código.
- Toda decisión técnica relevante se registra con justificación y alternativas.

## 5. Calidad

- Pruebas de backend con `pytest` y cobertura de dominio ≥ 70 %.
- Lint y formato antes de cada PR.
- CI en GitHub Actions debe pasar en cada pull request.
- Validaciones y códigos HTTP correctos en la API.

## 6. Checklist de pull request

- [ ] El cambio está probado o documentado.
- [ ] No rompe enlaces internos de documentación.
- [ ] No incluye datos personales ni secretos.
- [ ] La documentación afectada está actualizada.
- [ ] El CI pasa.
