# Ramas, entornos y CI/CD — Kintsugi Studio Web

> **Estado: activo.** Fecha: 24 de noviembre de 2026.
> Este documento define el flujo de ramas, los entornos de despliegue y la integración continua
> del proyecto. Complementa [`CONTRIBUTING.md`](../../CONTRIBUTING.md) y
> [`DECISION-STACK.md`](DECISION-STACK.md).

## 1. Ramas de larga duración

| Rama | Rol | Entorno | ¿Protegida? |
|---|---|---|---|
| `main` | Versión estable y desplegable. | `production` | Sí (PR + CI). |
| `develop` | Integración de desarrollo. | local / previews | No. |
| `test` | Validación antes de producción. | `test` | Sí (PR + CI). |

### Flujo

```text
feat/<tema> ──PR──▶ develop ──PR──▶ test ──PR──▶ main (production)
```

1. Cada cambio nace en una rama corta (`feat/`, `fix/`, `docs/`, `chore/`) desde `develop`.
2. La rama corta se integra a `develop` mediante pull request con CI verde.
3. Cuando `develop` acumula un incremento, se promueve a `test` con PR.
4. `test` se valida y, al aprobar, se promueve a `main` (producción) con PR.

## 2. Entornos de GitHub

| Entorno | Rama | Despliegue actual | Cuándo se usa |
|---|---|---|---|
| `test` | `test` | Placeholder (Railway/Render + Vercel). | Probar una versión candidata antes de producción. |
| `production` | `main` | Placeholder (Railway/Render + Vercel). | Entorno real del cliente. |

Los jobs de despliegue viven en [`ci-test.yml`](../../.github/workflows/ci-test.yml) y
[`ci-prod.yml`](../../.github/workflows/ci-prod.yml). Hoy son placeholders: imprimen el paso y
documentan qué secretos conectar. Cuando se definan los hosts se reemplazan por los comandos
reales de `vercel` / `railway` / `render`.

## 3. Pipeline de CI/CD

| Workflow | Dispara en | Qué hace |
|---|---|---|
| [`ci-develop.yml`](../../.github/workflows/ci-develop.yml) | push y PR a `develop`. | Lint y pruebas de backend y frontend. |
| [`ci-test.yml`](../../.github/workflows/ci-test.yml) | push y PR a `test`. | Checks + deploy al entorno `test`. |
| [`ci-prod.yml`](../../.github/workflows/ci-prod.yml) | push y PR a `main`. | Checks + deploy al entorno `production`. |

Los tres reutilizan [`reusable-checks.yml`](../../.github/workflows/reusable-checks.yml):

| Job | Pasos |
|---|---|
| `backend` | instalar dependencias → `ruff check` → `pytest`. |
| `frontend` | `npm ci` → `next lint` → `next build` → `vitest run`. |

## 4. Protección de ramas

Recomendación aplicada en GitHub (Settings → Branches):

- `main`: requiere PR con al menos una revisión y que el check de CI pase.
- `test`: requiere PR y que el check de CI pase.
- `develop`: sin restricción de push directo para iterar rápido.

> Si el plan de GitHub del repositorio no permite checks obligatorios en repositorios privados,
> se mantiene al menos la regla de equipo: **nadie hace push directo a `main` ni a `test`**.

## 5. Flujo de trabajo diario

```bash
git checkout develop
git pull --ff-only
git checkout -b feat/disponibilidad
# ... commits convencionales ...
git push -u origin feat/disponibilidad
# abrir PR hacia develop
```

```bash
# promover a test
git checkout test
git merge --no-ff develop
git push origin test

# promover a producción
git checkout main
git merge --no-ff test
git push origin main
```

## 6. Convenciones

- Commits convencionales en inglés (`feat:`, `fix:`, `docs:`, `test:`, `chore:`).
- Un commit por cambio lógico.
- Sin secretos ni datos personales en el repositorio.
- Los entornos se despliegan solo desde `test` y `main`; nunca desde `develop`.
