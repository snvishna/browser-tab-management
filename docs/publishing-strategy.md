# TabFlow Agent: Publishing Strategy

Publishing TabFlow Agent is straightforward since we have architected it to use native browser APIs (IndexedDB) instead of external native binaries. This means **zero setup** for end users.

---

## 1. Is this a good project to publish?

**Absolutely.** The extension market is highly saturated with "Tab Managers," but almost all of them are passive tools that just let you drag and drop tabs. 

Your unique selling proposition (USP) is incredibly strong:
> **"The first Dual-Engine Agent that actively manages your tab lifecycle. Features zero-latency Reflex Routing and deep Cognitive Grouping."**

People love "Local AI" and "Agentic" tools right now. If you pitch this on Hacker News, Product Hunt, or Reddit's `r/browsers`, it has a very high chance of going viral.

---

## 2. How to Publish (Step-by-Step)

Because this extension uses Manifest V3 and Native IndexedDB (via `Dexie.js`), it is perfectly compatible with Chrome, Brave, Edge, and Firefox. It requires absolutely no OS-level installers.

### Preparing the Code
Before publishing, you must zip your code.
1. Run `npm run build` one last time.
2. Select everything *inside* the `extension/` folder (`manifest.json`, `dist/`, `src/`, `palette.html`, etc.) and compress it into a `tab-manager.zip` file. *(Do not zip the outer folder itself, zip the contents).*

### Publishing to Mozilla Firefox (Add-ons)
1. Go to the [Mozilla Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/).
2. Create an account and click **Submit a New Add-on**.
3. Upload your `tab-manager.zip` file.
4. Mozilla's automated scanners will check your code. Because we patched out the `eval()` calls in `protobufjs`, it should pass the strict CSP checks immediately.
5. It is usually approved within 15 minutes.

### Publishing to Google Chrome (Web Store)
1. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).
2. Pay the one-time **$5 registration fee**.
3. Create a new item and upload the `tab-manager.zip`.
4. Fill out the Privacy Policy. *Crucial: Explicitly state that you collect zero user data and do no remote network requests.*
5. **The Review Process:** Because Chrome's review process involves human testers, it can take anywhere from 2 to 5 days for the initial approval.
