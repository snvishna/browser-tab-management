# Cross-Browser Manifest Packaging

When developing or packaging cross-browser extensions (Manifest V3), adhere to the following strict constraints to prevent store validation failures:

1. **Strip Firefox Settings for Chrome/Edge:** Firefox requires the `browser_specific_settings` key in `manifest.json` for extension IDs and `data_collection_permissions`. You MUST strip this entire key when generating the ZIP for the Chrome Web Store or Microsoft Edge Add-ons store. Their automated testers often crash or reject unrecognized top-level keys.
2. **Isolate Build Mutations:** If a single build script (e.g., `pack.sh`) sequentially generates multiple browser-specific ZIPs by mutating `manifest.json` (e.g., stripping `scripts` for Chrome or stripping `service_worker` for Firefox), you MUST guarantee that the manifest is perfectly restored from a pristine backup before the next browser's build step begins. Do not allow mutations from one browser build to leak into another.
3. **Global Service Worker Contexts:** When bundling background service workers for Chrome (e.g., using esbuild or Webpack), never configure the bundler to replace `global` with `window` (e.g., `define: { global: 'window' }`). Service workers do not have a `window` object, and this will cause a fatal `ReferenceError` during Chrome's automated startup testing. Use `globalThis` instead.
