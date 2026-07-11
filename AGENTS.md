# Repository guidance

## Core rule

Keep the portfolio's runtime structure intact. The root `CSS/`, `JavaScript/`, `fonts/`, `images/`, `en/`, and `fr/` paths are deployment assets, not documentation candidates.

Use [docs/README.md](docs/README.md) as the durable documentation index and [docs/superpowers/README.md](docs/superpowers/README.md) as the index for tracked implementation knowledge.

## Documentation lifecycle

- Keep conventional root files and runtime directories at the repository root.
- Put durable subject documentation under `docs/` by domain.
- Put active approved plans, active requirements, durable decisions, and useful completed records under the matching `docs/superpowers/` area described by its index.
- When work finishes, update both indexes, distill lasting conclusions into maintained documentation, archive only useful completed records, and remove obsolete material from active areas.
- Prefer Git history over repetitive status reports.
- Follow the scoped instructions in `docs/superpowers/AGENTS.md` and `docs/superpowers/archive/AGENTS.md`.

## Publication safety

Treat every tracked file as public. Never commit credentials, cookies, private keys, complete environment values, personal data, raw logs, or unnecessary production details. Before a documentation commit, inspect the complete staged diff, run the configured secret scanner when available, and manually review the staged content for sensitive material.

The three pre-existing broken HTML image references are outside the documentation-standardization scope; do not alter them as part of documentation-only work.
