# Implementation knowledge

This index tracks durable records that help future implementation work. Create a category only when it has content, and prefix content filenames with the best-supported `YYMMDD-` creation date.

- `plans/`: active, approved implementation plans.
- `specs/`: active requirements and designs awaiting implementation.
- `decisions/`: durable technical or product decisions.
- `archive/`: useful completed plans, reports, and evidence. Read its [agent instructions](archive/AGENTS.md) before consulting it.

Temporary SDD material belongs in ignored `.superpowers/sdd/`; machine-local briefs, raw reports, logs, diffs, and handoff evidence belong in ignored `.superpowers/archive/`. Never store secrets in either location.

When a record is completed, preserve only durable conclusions, move useful historical material to `archive/`, remove it from active categories, and update this index plus [the main documentation index](../README.md).
