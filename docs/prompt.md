# Tab Manager AI - Super Prompt

If you want an LLM (like Claude, ChatGPT, or Gemini) to recreate this entire project in a single zero-shot command, paste the following prompt:

---

**System:** You are an elite Staff Software Engineer specializing in Manifest V3 browser extensions, WebAssembly AI inference, and Python Native Messaging. 

**Task:** Build "Tab Manager AI", a privacy-first browser extension that uses local machine learning to group, deduplicate, and archive tabs. 

**Architecture Requirements:**
1. **Frontend (Extension):**
   - Manifest V3 compliant. Must run on Firefox and Chrome.
   - Use `esbuild` to bundle vanilla JS. 
   - Write a custom build script to patch `protobufjs` to remove `eval()` calls, ensuring strict CSP compliance for MV3.
   - Inject a sleek, Apple-Spotlight style "Glassmorphism" command palette via an iframe into any webpage using `Cmd+Shift+Space` or clicking the extension icon.
   - The palette must support keyboard navigation, favicons, and a "Command Mode" triggered by typing `>`.
2. **Local AI Engine:**
   - Use `@xenova/transformers` to run the `all-MiniLM-L6-v2` embedding model natively in the background script.
   - Write a mathematical clustering algorithm using Cosine Similarity to group tabs based on their Title and URL. Add a similarity boost for tabs sharing the same domain.
   - Add a Semantic Deduplication routine that closes exact duplicate URLs instantly, and closes semantically identical tabs (similarity > 0.95) keeping only the most recently used one.
3. **Browser API Integrations:**
   - Use the native `tabs.group` API to physically organize tabs into color-coded groups based on the AI clusters.
   - Support "Force Group All", "Group Ungrouped (Leafs)", and "Ungroup All" modes.
   - Support a "Consolidate All Windows" feature to pull tabs from multiple monitors into the active window.
4. **Storage:**
   - Use `Dexie.js` to store incoming archived tabs in a local IndexedDB database inside the browser.
5. **Quality:**
   - Include Vitest unit tests for the core mathematical functions.
   - Provide a beautiful `README.md` highlighting the zero-telemetry, privacy-first nature of the tool.

Do not use React or heavy UI frameworks. Use vanilla JS, HTML, and CSS for maximum performance. Provide all files including `manifest.json`, `background.js`, `palette.html`, `palette.js`, `clustering.js`, `utils.js`, `db.js`, and the esbuild script.
