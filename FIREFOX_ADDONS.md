# Firefox Add-ons (AMO) Publishing Guide

Publishing TabFlow Agent to the Mozilla Add-ons (AMO) store requires a slightly different process than the Chrome Web Store. Fortunately, the codebase is already compatible out-of-the-box (our `manifest.json` includes the required `browser_specific_settings.gecko.id` property).

## 1. Prerequisites

1. Create a [Firefox Developer Account](https://addons.mozilla.org/en-US/developers/).
2. Ensure you have the final release build of your extension.

## 2. Source Code Submission Requirement (Crucial)

Unlike Google, Mozilla strictly enforces open-source verification for any extension that uses minified, bundled, or compiled code (which our `build.mjs` script produces).

**When you submit to AMO, you MUST provide two ZIP files:**
1. **The Extension ZIP:** The standard `dist/` or root zip containing the actual extension to be installed.
2. **The Source Code ZIP:** A complete snapshot of your codebase (including `package.json`, `build.mjs`, and all `src/` files) so Mozilla reviewers can independently build and verify the code.

*If you do not provide the Source Code ZIP, your extension will be rejected during the manual review phase.*

## 3. Submission Steps

1. Navigate to the [AMO Developer Hub](https://addons.mozilla.org/en-US/developers/addon/submit/).
2. Click **Submit a New Add-on**.
3. Choose **On this site** (to list it publicly on the AMO store).
4. **Upload the Extension ZIP** when prompted. AMO will run an automated linter. Ignore warnings about Manifest V3 (Firefox supports MV3, but their linter sometimes flags it as newer).
5. **Upload the Source Code ZIP** in the specific field provided for "Source Code" during the submission wizard.
6. Provide build instructions in the "Notes to Reviewer" field.
   
   **Example Reviewer Note:**
   > "To build this extension from the provided source code, run `npm install` and then `node build.mjs`. The compiled output will be generated for inspection. This extension uses standard Manifest V3."

## 4. Store Listing Differences from Chrome

* **Descriptions:** Firefox allows Markdown in their detailed description! You do not need to strip out formatting like you do for Chrome.
* **Privacy Policy:** Required just like Chrome. You can link to the hosted `PRIVACY_POLICY.md`.
* **Permissions:** AMO reviewers are generally stricter about the `<all_urls>` permission. You must explicitly justify that the extension is a "Command Palette" that must overlay on *any* site the user is currently browsing, and that deduplication requires monitoring all navigation events.

## 5. Review Timeline

Firefox reviews are typically faster than Chrome (often 24-48 hours), but because we require a source code compilation check, expect the first review to take up to 3-5 days. Subsequent updates will be much faster.
