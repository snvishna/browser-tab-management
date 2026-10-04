# Coding Standards

1. **Vanilla First**: Prefer Vanilla JavaScript (ES6+), HTML, and CSS. Avoid heavy frameworks unless absolutely necessary for state-heavy components.
2. **Modular Architecture**: Keep functions pure where possible. Group logic into cohesive, single-responsibility files (e.g., `db.js`, `clustering.js`).
3. **Error Handling**: Every asynchronous operation and external API call must be wrapped in try/catch or `.catch()` blocks. Provide fallback states.
4. **No UI Blocking**: Intensive tasks (like AI embedding and clustering) must be heavily optimized or moved to background workers to maintain a 60fps UI.
5. **Security**: Avoid `eval()` and `innerHTML` whenever possible to strictly comply with Manifest V3 security requirements.
6. **Chrome Extension IPC Race Conditions (CRITICAL)**: When calling `chrome.runtime.sendMessage` from a short-lived execution context (like an `iframe` or a browser action `popup`) and immediately destroying that context (e.g., closing the popup, removing the iframe), the message will silently abort before the background script can receive it. You MUST assign the result of `sendMessage` to a Promise and explicitly attach a `.then()` or `await` block *before* executing the teardown/close logic (e.g., `window.parent.postMessage('close-palette')`). Do not rely on good intentions.
7. **Test-Driven Bug Fixes**: When fixing an algorithmic, filtering, or utility bug (e.g., a search algorithm failing on edge cases), do NOT just apply a patch to the UI code. Abstract the logic into a pure, testable function (e.g., in `utils.js`), and immediately write covering unit tests in `tests/` using `vitest` to ensure the regression never happens again.
