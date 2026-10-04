---
description: Enforces robust validation and configuration logic in UI and background scripts
---

# UI Logic and Input Validation

When writing auto-population, configuration parsing, or UI interaction logic, follow these strict guidelines to prevent brittle user experiences:

1. **Never use strict equality (`===`) for user-facing configuration strings:**
   When checking if a user's configuration field should be updated or defaulted, do NOT check for exact string matches (e.g., `model === 'gpt-4o-mini'`). The user may have manually changed this to `gpt-4o` or `gpt-4o-latest`. 
   
2. **Use robust substring matching:**
   Use `.includes()`, `.startsWith()`, or regex to verify the *family* or *category* of the user's configuration. (e.g., `!model.startsWith('gpt')`).

3. **Assume manual overrides are valid:**
   If a user has typed something that does not match your expected default, but fits the correct category (e.g. they typed `claude-3-5-sonnet-latest`), you must preserve their input. Only overwrite if the input fundamentally clashes with the required engine (e.g., trying to use a `gpt` model with an Anthropic API key).

4. **Fail loudly in tests, recover gracefully in UI:**
   Ensure edge cases (like new API key prefixes such as `AQ`) default to the safest, most capable denominator instead of silently failing.
