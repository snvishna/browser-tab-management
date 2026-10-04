# System Architecture

The TabFlow Agent is designed as a highly scalable, dual-engine AI system running inside the browser.

## High-Level Component Diagram

```mermaid
flowchart TD
    subgraph Browser Context (Manifest V3)
        A[Content Script] -->|Cmd+Shift+Space| B[Command Palette UI]
        B -->|Message Passing| C[Agent Background Script]
        
        subgraph The Reflex Engine (System 1)
            C <-->|Lightweight HTTP API| D[Fast Router: Jev / Groq]
        end
        
        subgraph The Cognitive Engine (System 2)
            C <-->|Heavy Generative HTTP API| E[Generative LLM: Anthropic / OpenAI]
        end
        
        C -->|Tabs API| F[Native Browser Tab Groups]
        C <-->|Dexie.js| G[(90-Day Infinite Lifecycle Log)]
    end
```

## Component Breakdown

### 1. Command Palette UI (`palette.html`, `palette.js`)
- **Role:** The primary user interface.
- **Design:** Injected securely as an `iframe` overlay inside the active tab. This guarantees perfect CSS isolation (preventing the host website's styles from breaking the palette).
- **Communication:** Sends asynchronous commands (e.g., `cluster_tabs`, `deduplicate_tabs`) to the Background Script.

### 2. The Agent Background Engine (`background.js`, `prompts.js`)
- **Role:** The brain of the extension.
- **Responsibilities:** 
  - Listens for `webNavigation` events to trigger real-time deduplication.
  - Loads semantic agent instructions from `prompts.js`.
  - Routes payload data to either the Reflex Engine or Cognitive Engine based on user API key configuration.

### 3. The Dual-Engine AI System
- **The Reflex Engine (System 1)**: Runs on every link click. Defaults to local exact-match routing and heuristic single-instance domains (`localhost`, etc) for 0ms deduplication. Power users can plug in a fast API classifier (like TypeSafe Jev or Groq) for highly intelligent, semantic URL routing via low-latency HTTP.
- **The Cognitive Engine (System 2)**: Runs on demand. Uses generative LLMs (Anthropic Claude, OpenAI GPT-4o) via API keys to cluster tabs, generate human-readable category names, and process complex grouping logic. If no API key is provided, falls back to mathematical TF-IDF semantic clustering algorithms running securely inside the service worker context.

### 4. The 90-Day Lifecycle Log (IndexedDB)
- **Role:** Persistent infinite-memory cold-storage.
- **Mechanics:** Every closed tab is logged into a local IndexedDB archive via `Dexie.js`. It strictly auto-prunes at 90 days to maintain browser performance, effectively creating a massive, fuzzy-searchable history database.

### 5. Multi-Browser Support Abstraction
- **Role:** Seamless execution across Chromium and Firefox engines.
- **Mechanics:** The extension employs a dynamic API resolution layer (`const browserAPI = typeof browser !== "undefined" ? browser : chrome;`). This automatically detects if it is running in a Mozilla environment or a Chromium environment, ensuring complete compatibility.
