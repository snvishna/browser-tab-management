---
name: docs-and-comments
description: Agent skill to audit the repository for stale documentation or missing code comments.
---

# Documentation Audit

When invoked, the agent must:
1. **Review Inline Comments**: Ensure complex algorithms (like Agglomerative Clustering) have clear step-by-step inline explanations.
2. **Check Documentation Decay**: Verify that `docs/architecture.md` and `README.md` perfectly match the current active implementation (e.g., Manifest V3, Dexie.js instead of SQLite).
3. **Clean Up Scratch Files**: Identify and propose deletion for obsolete spec files or scratch notes.
4. **Self-Documenting Code**: Suggest variable and function renaming to make code intention clearer without needing excessive commenting.
