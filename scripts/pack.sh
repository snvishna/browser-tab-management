#!/bin/bash

# Exit on error
set -e

echo "📦 Packing TabFlow Agent for Publishing..."

# 1. Clean old zips
rm -f tabflow-extension.zip tabflow-source.zip

# 2. Build the extension
echo "🔨 Building the extension..."
cd extension
node build.mjs
cd ..

# 3. Create Chrome ZIP
echo "🗜️ Creating Chrome ZIP (tabflow-chrome.zip)..."
cd extension
cp manifest.json manifest.bak.json
node -e "const fs = require('fs'); const m = JSON.parse(fs.readFileSync('manifest.json')); delete m.background.scripts; delete m.browser_specific_settings; fs.writeFileSync('manifest.json', JSON.stringify(m, null, 2));"
zip -r ../tabflow-chrome.zip . -x "node_modules/*" "*/node_modules/*" ".*" "*.zip" > /dev/null

# 4. Create Firefox ZIP
echo "🗜️ Creating Firefox ZIP (tabflow-firefox.zip)..."
cp manifest.bak.json manifest.json
node -e "const fs = require('fs'); const m = JSON.parse(fs.readFileSync('manifest.json')); delete m.background.service_worker; m.background.scripts = ['dist/background.js']; fs.writeFileSync('manifest.json', JSON.stringify(m, null, 2));"
zip -r ../tabflow-firefox.zip . -x "node_modules/*" "*/node_modules/*" ".*" "*.zip" > /dev/null

# Restore original manifest
mv manifest.bak.json manifest.json
cd ..

# 5. Create the Source Code ZIP (Required by Firefox AMO)
echo "🗜️ Creating Source Code ZIP (tabflow-source.zip)..."
zip -r tabflow-source.zip . -x "node_modules/*" "*/node_modules/*" ".git/*" ".DS_Store" "*.zip" ".venv/*" "*/.venv/*" "*/__pycache__/*" > /dev/null

echo "✅ Done!"
echo "➡️  tabflow-chrome.zip    : Upload this to the Chrome Web Store."
echo "➡️  tabflow-firefox.zip   : Upload this to Firefox AMO as the main package."
echo "➡️  tabflow-source.zip    : Upload this to Firefox AMO in the 'Source Code' field."
