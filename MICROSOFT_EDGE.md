# Publishing TabFlow Agent to Microsoft Edge Add-ons

Publishing to Microsoft Edge is very similar to the Chrome Web Store, as Edge is Chromium-based. It requires the exact same Manifest V3 configuration as Chrome (using `service_worker`), meaning you will use the `tabflow-chrome.zip` package we generated earlier.

Here is the step-by-step process for getting TabFlow Agent published on the Edge Add-ons Store.

## Step 1: Register as an Edge Developer
Unlike the Chrome Web Store ($5) or Apple Developer Program ($99), registering for a Microsoft Edge developer account is **completely free**.

1. Go to the [Microsoft Partner Center](https://partner.microsoft.com/en-us/dashboard/microsoftedge/overview).
2. Sign in with a **personal Microsoft account** (e.g., `@outlook.com` or `@hotmail.com`). *Note: Microsoft currently does not allow work/school accounts for extension developer registration.*
3. Fill out the Developer Account Registration form with your publisher name (e.g., your name or company name).
4. **Wait for Verification**: Microsoft requires a short verification period (usually a few hours to a day) before your dashboard becomes fully active. You will receive an email once approved.

## Step 2: Create a New Extension
Once your account is verified and you have access to the Partner Center dashboard:

1. Click on **Create new extension** from the Edge Add-ons overview page.
2. You will be prompted to upload your extension package.

## Step 3: Upload the Correct Package
Because Edge is Chromium-based and follows the same Manifest V3 standards as Google Chrome, you must upload the **Chrome** build of the extension:

1. Click **Browse** and select `tabflow-chrome.zip` from your project root.
2. *Do not upload the Firefox zip or the Source Code zip.* Edge does not require source code uploads unless specifically requested by reviewers later.

## Step 4: Fill Out Store Listing Details
After the package processes successfully, you need to complete the store listing:

1. **Availability**: Select which markets/countries you want the extension to be available in (default is all).
2. **Properties**: Choose the category (e.g., Productivity).
3. **Store Listing Assets**: You will need to upload:
   - Your `128x128` icon
   - Promotional Tiles (a `440x280` image and optionally larger banners)
   - Screenshots of the extension in action (the glassmorphism palette, the active tab groupings)
   - A descriptive summary and detailed description (you can reuse the exact copy from `CHROMEWEBSTORE.md`).
4. **Search Terms**: Add relevant keywords like `tabs`, `tab manager`, `AI`, `Gemini`, `OpenAI`, `group tabs`.

## Step 5: Privacy Declarations (Crucial)
Just like Firefox and Chrome, Microsoft is very strict about privacy in Manifest V3.
1. **Privacy Policy**: Provide the URL to your hosted `PRIVACY_POLICY.md` (e.g., your GitHub pages URL).
2. **Data Usage**: Explicitly declare that you are requesting the `tabs` and `tabGroups` permissions to read URLs/Titles for organization.
3. **Remote Code**: State clearly that the extension does *not* execute remote code, but *does* make API calls to remote AI endpoints (Gemini/OpenAI) using Bring-Your-Own-Key (BYOK) authentication.

## Step 6: Submit for Certification
1. In the **Notes for Certification** box, explicitly explain the BYOK architecture: *"This extension uses local DOM overlays and communicates with OpenAI/Gemini APIs using the user's explicitly provided API key. No data is collected by the publisher."*
2. Click **Submit**.

**Review Time:** Certification on Microsoft Edge typically takes **3 to 7 business days**. Every update you push later must have an incremented version number in `manifest.json`.
