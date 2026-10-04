# Chrome Web Store Listing — TabFlow Agent

> Last Updated: 2026-10-04

## Store Listing

**Extension Name** [REQUIRED]
TabFlow Agent

**Short Description** [REQUIRED]
Automatically groups related tabs and aggressively prevents duplicate URLs to keep your browser organized using AI.

**Detailed Description** [REQUIRED]
TabFlow Agent is a background assistant that intelligently manages your browser tabs so you never feel overwhelmed. It automatically prevents you from opening duplicate links and smartly organizes your messy browser window into clean, topical groups. 

Simply browse the web as usual, and the extension will quietly detect if you navigate to a URL that you already have open, instantly refocusing you on the existing tab instead of creating clutter. When you need to find something, hit the keyboard shortcut to open the command palette, where your tabs are cleanly clustered into semantic groups using local or remote AI models. 

Your data privacy is fully respected. The extension uses robust local fallback mechanisms to group tabs locally if you prefer, or integrates with your own provided API keys for advanced remote processing.

If you encounter any issues, you can report them to our GitHub repository.

**Category** [REQUIRED]
Productivity

**Single Purpose** [REQUIRED]
Automatically manages and deduplicates browser tabs using AI to reduce clutter and keep your workspace organized.

**Primary Language** [REQUIRED]
English

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Store Icon [REQUIRED] | 128×128 PNG | 🟡 Needs update | `extension/icons/icon-128.png` |
| Screenshot 1 [REQUIRED] | 1280×800 or 640×400 | ⬜ Not created | |
| Screenshot 2 [RECOMMENDED] | 1280×800 or 640×400 | ⬜ Not created | |
| Screenshot 3 [RECOMMENDED] | 1280×800 or 640×400 | ⬜ Not created | |
| Screenshot 4 | 1280×800 or 640×400 | ⬜ Not created | |
| Screenshot 5 | 1280×800 or 640×400 | ⬜ Not created | |
| Small Promo Tile [RECOMMENDED] | 440×280 | ⬜ Not created | |
| Marquee Promo Tile | 1400×560 | ⬜ Not created | |

### Screenshot Notes
- **Screenshot 1**: Show the browser with dozens of messy tabs, then an arrow pointing to a cleanly organized window with 5 neat Tab Groups.
- **Screenshot 2**: Show the Command Palette overlay invoked on a webpage, demonstrating the AI grouping categories.
- **Screenshot 3**: Show the Advanced Settings panel, highlighting the ability to paste your own API keys.
- **Screenshot 4**: Show a notification or visual indication of a duplicate tab being intercepted and refocused.

## Permissions Justification

| Permission | Type | Justification |
|------------|------|---------------|
| `tabs` | permissions | Allows the extension to read the URL and title of all open tabs to detect duplicates and categorize them into semantic groups. |
| `tabGroups` | permissions | Enables the extension to physically move related tabs into color-coded browser tab groups for visual organization. |
| `storage` | permissions | Required to securely save your API configuration, settings, and local embeddings for the AI engines. |
| `webNavigation` | permissions | Allows the extension to intercept page navigation before it completes, enabling instant deduplication when you click a link you already have open. |
| `alarms` | permissions | Used for background scheduling, such as periodically cleaning up stale data or triggering scheduled tab maintenance without draining battery. |
| `scripting` | permissions | Needed to inject the command palette interface directly over your active web pages so you can access it without leaving your workflow. |
| `activeTab` | permissions | Provides temporary access to the current tab when you activate the extension, allowing it to take immediate actions like closing or refreshing the active view. |
| `sessions` | permissions | Enables the extension to read your recently closed tabs, ensuring duplicate detection can also restore recently lost work if needed. |
| `<all_urls>` | host_permissions | Essential for the extension to monitor navigations and inject the command palette interface across any webpage you visit. |

## Privacy & Data Use

### Data Collection

**Does the extension collect user data?** Yes

| Data Type | Collected? | Transmitted Off-Device? | Purpose | Shared with Third Parties? |
|-----------|-----------|------------------------|---------|---------------------------|
| Personally identifiable info | No | No | | No |
| Health info | No | No | | No |
| Financial info | No | No | | No |
| Authentication info | Yes | No | API keys are stored locally on the device to authenticate with user-provided AI services. | No |
| Personal communications | No | No | | No |
| Location | No | No | | No |
| Web history | Yes | Yes | Tab URLs and titles are read and temporarily sent to user-configured AI APIs (e.g. Gemini/OpenAI) to group and deduplicate tabs. | Yes (Only to user-configured AI providers) |
| User activity | No | No | | No |
| Website content | No | No | | No |

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

## Privacy Policy

**Privacy Policy URL** [REQUIRED]
*To be generated and hosted (e.g. on GitHub Pages)*

## Distribution

**Visibility**: Public
**Regions**: All regions

## Developer Info

**Publisher Name** [REQUIRED]
*To be determined*

**Contact Email** [REQUIRED]
*To be determined*

**Support URL / Email** [RECOMMENDED]
https://github.com/snvishna/tabflow-agent/issues

**Homepage URL** [RECOMMENDED]
https://github.com/snvishna/tabflow-agent

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.0 | 2026-10-04 | Initial release featuring Reflex deduplication and Cognitive grouping. | Draft |

## Review Notes

### Known Issues / Limitations
- None currently known.

### Rejection History
- N/A
