const fs = require('fs');
const path = require('path');

function processSite(siteDir) {
    const indexPath = path.join(siteDir, 'index.html');
    let html = fs.readFileSync(indexPath, 'utf-8');
    
    // Find all images in assets/images/
    const imagesDir = path.join(siteDir, 'assets', 'images');
    if (fs.existsSync(imagesDir)) {
        const images = fs.readdirSync(imagesDir);
        for (const img of images) {
            if (img.startsWith('.')) continue;
            
            // Look for any path in HTML that ends with /img
            // Example: ./webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/shot-1.webp
            // We want to replace it with ./assets/images/img
            
            // Regex to find paths ending with /img inside quotes or parentheses
            // /([('"])\.\/[^)'"]*\/img([)'"])/
            // Wait, we can just replace occurrences of something ending in /img
            // Actually, we can use a simpler approach:
            
            const regex = new RegExp(`(?:\\.\\/)?[a-zA-Z0-9_\\-\\./]+\\/${img.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\$&')}`, 'g');
            html = html.replace(regex, `./assets/images/${img}`);
        }
    }
    
    fs.writeFileSync(indexPath, html);
    console.log(`Processed images in ${siteDir}`);
}

processSite('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-1');
processSite('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-2');
