# Product Requirements Document (PRD)

## Product Vision
TabFlow Agent is a state-of-the-art dual-engine AI browser extension. It solves the "tab bankruptcy" problem by actively managing the entire digital footprint of a user. It intercepts redundant navigations in real-time and intelligently routes, groups, and tracks tabs using a combination of fast local AI models and heavy generative LLMs.

## Core Requirements

### 1. Dual-Engine AI System
- **Requirement:** The system must offer both zero-latency real-time routing and deep semantic processing.
- **Implementation:** 
  - **The Reflex Engine**: Uses local `all-MiniLM-L6-v2` (free) or an OpenAI-compatible classifier like Jev (Pro) to instantly deduplicate incoming navigations.
  - **The Cognitive Engine**: Uses local K-Means clustering (free) or Generative LLMs via API keys (Pro) to generate premium, logical workspace groupings.

### 2. Multi-API Key Configuration
- **Requirement:** Power users must be able to securely inject their own LLM API keys.
- **Implementation:** A simple Settings UI inside the command palette allowing configuration of endpoints for both the Reflex Engine and the Cognitive Engine. Keys are stored securely in the sandboxed `chrome.storage.local`.

### 3. Agentic Deduplication & Routing
- **Requirement:** Clean up redundant tabs dynamically based on user context.
- **Implementation:** The Reflex Engine intercepts `chrome.webNavigation.onBeforeNavigate`. It must logically distinguish between "App Dashboards" (requires refreshing the existing tab) and "Content/Products" (requires opening a new tab for comparison).

### 4. Glassmorphism Command Palette
- **Requirement:** A keyboard-driven, modern UI to manage the tab lifecycle.
- **Implementation:** An injected HTML `iframe` supporting fuzzy search across active tabs and historical lifecycle logs, keyboard navigation (Up/Down/Enter), and executing agentic commands (`>` mode).

### 5. Infinite 90-Day Lifecycle Log
- **Requirement:** Securely persist every tab closed by the user or the agent.
- **Implementation:** Use `Dexie.js` to write tabs into an IndexedDB database natively within the browser profile. The database must automatically prune entries older than 90 days to prevent bloat and maintain performance.

### 6. Native Grouping Integration
- **Requirement:** Reflect Cognitive Engine clusters visually in the browser.
- **Implementation:** Utilize the standard Manifest V3 `tabs.group` and `tabGroups.update` APIs to color-code and title tab clusters.
