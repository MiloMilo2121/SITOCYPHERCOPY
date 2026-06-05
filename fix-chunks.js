const fs = require('fs');
const path = require('path');

function fixRootPaths(siteDir) {
    const indexPath = path.join(siteDir, 'index.html');
    let html = fs.readFileSync(indexPath, 'utf-8');
    
    const chunksDir = path.join(siteDir, '_next', 'static', 'chunks');
    if (fs.existsSync(chunksDir)) {
        const files = fs.readdirSync(chunksDir);
        for (const file of files) {
            if (file.startsWith('.')) continue;
            
            // Replace "./filename" with "./_next/static/chunks/filename"
            const escapedFile = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex1 = new RegExp(`"\\.\\/${escapedFile}"`, 'g');
            html = html.replace(regex1, `"./_next/static/chunks/${file}"`);
            
            // Wait, what about href="./[root-of-the-server]__8350bd0d._.css"?
            // We should also replace '="./filename"' with '="./_next/static/chunks/filename"'
            const regex2 = new RegExp(`="\\.\\/${escapedFile}"`, 'g');
            html = html.replace(regex2, `="./_next/static/chunks/${file}"`);
        }
    }
    
    fs.writeFileSync(indexPath, html);
    console.log(`Fixed chunks paths in ${siteDir}`);
}

fixRootPaths('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-1');
fixRootPaths('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-2');
