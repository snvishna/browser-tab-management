# 🌌 TabFlow Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Manifest: V3](https://img.shields.io/badge/Manifest-V3-success.svg)](#)
[![AI Powered](https://img.shields.io/badge/AI-Powered-purple.svg)](#)

**TabFlow Agent** is a state-of-the-art, dual-engine AI browser tab manager. It doesn't just search tabs; it actively manages your entire browsing lifecycle. By combining blazing-fast reflex routing with deep generative AI, it intelligently deduplicates, routes, groups, and tracks your digital footprint.

### 🛡️ The Dual-Engine AI Architecture
Our extension is fully customizable to your privacy and performance needs:

**1. The Free Tier (Zero-Configuration, 100% Local)**
Out of the box, the extension runs `all-MiniLM-L6-v2` locally in your browser via WebAssembly. Your tabs never leave your machine.
- **Reflex Routing**: Instant cosine similarity deduplication.
- **Cognitive Grouping**: Mathematical K-Means clustering (using domain centroids for naming).

**2. The Pro Tier (Bring Your Own API Key)**
Plug in your API keys (OpenAI, Gemini, Jev) to unlock true Agentic capabilities:
- **The Reflex Engine**: Use an ultra-fast classifier (like Jev or Groq) to intercept clicks in real-time (~10ms). It semantically understands the difference between comparing two Amazon products (opens new tabs) vs. clicking a dashboard link twice (refreshes existing tab).
- **The Cognitive Engine**: Use a heavy generative model (like Gemini or GPT-4o) to group chaotic tabs into premium, logically named workspaces (e.g., "Frontend Development", "Financial Planning").
*(Note: A single API key can be used for both engines, or you can split them in Advanced Settings!)*

### 🕰️ The 90-Day Infinite Memory
TabFlow Agent acts as a rolling black box for your browser. It silently tracks and logs every tab you open and close into a highly compressed, locally encrypted IndexedDB. 
- You can fuzzy search your *entire* 90-day history instantly.
- Strict 90-day auto-pruning guarantees your browser never bloats.
- **God-Mode Export**: Dump your entire active and historical lifecycle into a single JSON file.

---

## ✨ Features

- **🧠 System 1 Deduplication**: Prevents you from opening 5 identical Jira or Slack tabs. Intelligently routes you to existing tabs.
- **🌱 System 2 Grouping**: Organizes chaos into structured workspaces.
- **🔍 Glassmorphism Command Palette**: Hit `Cmd+Shift+Space` to instantly search your active and historical lifecycle.
- **📦 90-Day Auto-Archiving**: Securely banishes unused tabs to local storage.

---

## 🚀 Quickstart Installation

### 1. Build the Extension
Clone the repository (or pull latest if it exists) and build the frontend:
```bash
git clone https://github.com/snvishna/tabflow-agent.git ~/scripts/tabflow-agent || git -C ~/scripts/tabflow-agent pull
cd ~/scripts/tabflow-agent/extension
npm install
npm run build
```

### 3. Load into your Browser
**Firefox (Recommended):**
1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on...**
3. Select the `extension/manifest.json` file.

**Google Chrome / Brave / Microsoft Edge:**
1. Open `chrome://extensions/` (or `edge://extensions/`)
2. Enable **Developer mode** in the top right.
3. Click **Load unpacked** and select the `extension` folder.
4. *(Note: Because there is no Python daemon, you don't need to configure any Extension IDs. It just works!)*

---

## ⌨️ Shortcuts & Commands
- **Open Palette**: `Cmd+Shift+Space` (Mac) or `Ctrl+Shift+Space` (Windows/Linux)
- **Click the Extension Icon** in your browser toolbar to open the palette!
- *Note: Customize this shortcut natively in your browser at `chrome://extensions/shortcuts` or `about:addons`.*

Inside the palette, type `>` to access AI commands:
- `✨ Organize Tabs (AI Magic)`
- `🌱 Organize Ungrouped Tabs`
- `💥 Ungroup All Tabs`
- `🗂️ Consolidate All Windows`
- `📦 Archive Unused Tabs (> 3 Days)`
- `♻️ Recover Last Archived`
- `🔍 Search Archives & Closed Tabs`
- `💾 Export Backup (Tabs & Archives)`
- `📥 Import Backup`

---

## 🛠️ Architecture & Development
Built with a highly scalable, privacy-centric architecture:
- **Frontend**: Vanilla JS, HTML/CSS (Glassmorphism design), Manifest V3.
- **In-Browser AI**: `@xenova/transformers` bundled via a custom `esbuild` pipeline (specifically patched for MV3 CSP compliance).
- **Storage**: Native IndexedDB via `Dexie.js` for limitless, zero-setup local archiving.
- **Testing**: `vitest` for blazing-fast unit testing of clustering logic.

### Running Tests
```bash
cd extension
npm run test
```

## 📜 License
MIT License
