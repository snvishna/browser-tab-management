---
name: code-coverage
description: Agent skill to verify and maintain robust code coverage through automated testing.
---

# Code Coverage Checks

When invoked, evaluate the codebase to ensure robust test coverage:
1. **Identify Missing Tests**: Scan for core logic (`db.js`, `clustering.js`) that lacks unit tests.
2. **Mocking External APIs**: Ensure Chrome Extension APIs (`chrome.tabs`, `chrome.storage`) are mocked out correctly in test suites.
3. **Enforce Coverage Targets**: Ensure that at least 80% line coverage is maintained for critical data transformation and AI pipeline tasks.
4. **Generate Tests**: Automatically generate missing unit tests using vanilla testing paradigms (e.g., Jest or Mocha).
