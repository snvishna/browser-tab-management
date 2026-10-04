import { build } from 'esbuild';
import fs from 'fs';

async function runBuild() {
    await build({
        entryPoints: ['src/background.js'],
        bundle: true,
        format: 'esm',
        target: 'esnext',
        define: { global: 'window' },
        outdir: 'dist',
    });

    // Patch protobufjs eval issue (Manifest V3 forbids eval)
    const filePath = 'dist/background.js';
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Replace: eval("quire".replace(/^/, "re"))
    // With: (function(){return null;})
    code = code.replace(/eval\("quire"\.replace\(\/\^\/, "re"\)\)/g, '(function(){return null;})');
    
    fs.writeFileSync(filePath, code);
    console.log('Build completed and patched for MV3!');
}

runBuild().catch(console.error);
