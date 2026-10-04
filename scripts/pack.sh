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

# 3. Create the Extension ZIP (The distributable)
echo "🗜️ Creating Extension ZIP (tabflow-extension.zip)..."
cd extension
zip -r ../tabflow-extension.zip . -x "node_modules/*" ".*" "*.zip" > /dev/null
cd ..

# 4. Create the Source Code ZIP (Required by Firefox AMO)
echo "🗜️ Creating Source Code ZIP (tabflow-source.zip)..."
# We zip everything in the root, excluding git, node_modules, and the zips themselves
zip -r tabflow-source.zip . -x "node_modules/*" "extension/node_modules/*" ".git/*" ".DS_Store" "*.zip" > /dev/null

echo "✅ Done!"
echo "➡️  tabflow-extension.zip : Upload this to Chrome Web Store & Firefox AMO as the main package."
echo "➡️  tabflow-source.zip    : Upload this to Firefox AMO in the 'Source Code' field."
