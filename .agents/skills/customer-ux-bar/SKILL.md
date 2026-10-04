---
name: customer-ux-bar
description: Agent skill to strictly enforce high usability, marketing-friendly language, and simple UX across all user-facing components.
---

# Customer UX & Usability Bar

When developing new features, commands, or UI elements, always adhere to the following strict usability checks:

1. **No Technical Jargon in UI (Zero Tolerance)**: Never expose underlying architecture or data structure concepts to the user.
   - *Bad*: "Group Leaves", "Group Leafs", "Orphan Nodes", "Deduplicate", "Consolidate DOM", "Run GC"
   - *Good*: "Organize Ungrouped Tabs", "Clean up Clutter", "Free up Memory"
   - *Rule*: Before adding any string to the UI, ask: "Would my non-technical parent understand exactly what this does?"

2. **Ruthless Simplification**: Reduce the cognitive load. If there are too many commands, consolidate them. Keep the palette clean and intuitive.

3. **Marketing-Friendly Copy**: Every button, title, and tooltip should read like a premium consumer application.

4. **Invisible AI**: AI should feel like magic, not a mathematical operation. Instead of showing "Confidence Score: 0.82", just confidently group the tabs under a smart human-readable category (e.g., "Entertainment & Media").

5. **Frictionless Defaults**: The default behavior should be the safest and most broadly useful option (e.g., don't auto-archive all tabs, only archive truly stale ones).
