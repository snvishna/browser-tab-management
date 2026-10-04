---
description: Enforces strict adherence to explicitly retrieved documentation over internal assumptions.
---

# Research Diligence & Documentation Adherence

When debugging errors, migrating APIs, or performing lookups using tools like `search_web`, `read_url_content`, or `gemini_search_docs`, you must abide by the following strict constraints:

1. **Facts Over Assumptions:**
   Never prioritize your internal training weights or assumptions over the explicitly retrieved facts from a web search or documentation lookup. If documentation explicitly states a version is deprecated or a newer version is required, you must use the newer version unconditionally.

2. **No Lazy Skimming:**
   You must read the entirety of the retrieved summaries or documentation chunks. Do not stop reading at the first hint of an answer. Pay close attention to "Important Notes", "Deprecation Warnings", or specific version numbers mentioned in the text.

3. **Single-Attempt Resolution:**
   The goal is to fix the user's issue in a single attempt without requiring them to act as QA. If you retrieve documentation that outlines a modern standard (e.g., a 2026 API version), you must use that exact standard rather than proposing an outdated fallback.
