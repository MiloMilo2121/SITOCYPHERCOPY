const fs = require('fs');
const path = require('path');

function processSite(siteDir) {
    const indexPath = path.join(siteDir, 'index.html');
    if (!fs.existsSync(indexPath)) return;
    
    let html = fs.readFileSync(indexPath, 'utf-8');
    
    const assetsDir = path.join(siteDir, 'assets');
    const dirs = {
        css: path.join(assetsDir, 'css'),
        js: path.join(assetsDir, 'js'),
        images: path.join(assetsDir, 'images'),
        fonts: path.join(assetsDir, 'fonts'),
        misc: path.join(assetsDir, 'misc')
    };
    
    // Create directories
    for (const d of Object.values(dirs)) {
        if (!fs.existsSync(d)) {
            fs.mkdirSync(d, { recursive: true });
        }
    }
    
    // Match anything starting with ./ (excluding just ./)
    const regex = /(?:src|href|url)=?['"(]\.\/([^'"()]+)['")]/g;
    let match;
    const pathsFound = new Set();
    
    while ((match = regex.exec(html)) !== null) {
        if (match[1] && !match[1].startsWith('assets/')) {
            pathsFound.add(match[1]);
        }
    }
    
    console.log(`Found ${pathsFound.size} paths in HTML for ${siteDir}`);
    
    const movedMap = {}; // oldRelativePath -> newRelativePath
    const usedNames = new Set();
    
    function getUniqueName(baseName, category) {
        let name = baseName;
        let counter = 1;
        const ext = path.extname(baseName);
        const nameWithoutExt = path.basename(baseName, ext);
        while (usedNames.has(category + '/' + name)) {
            name = `${nameWithoutExt}-${counter}${ext}`;
            counter++;
        }
        usedNames.add(category + '/' + name);
        return name;
    }
    
    for (const relativePath of pathsFound) {
        const fullPath = path.join(siteDir, relativePath);
        
        if (!fs.existsSync(fullPath)) {
            console.log(`Warning: File does not exist: ${fullPath}`);
            continue;
        }
        
        const ext = path.extname(relativePath).toLowerCase();
        let category = 'misc';
        
        if (ext === '.css') category = 'css';
        else if (ext === '.js' || ext === '.mjs' || relativePath.includes('hotjar') || relativePath.includes('clarity')) category = 'js';
        else if (['.webp', '.png', '.jpg', '.jpeg', '.svg', '.ico'].includes(ext)) category = 'images';
        else if (['.woff', '.woff2', '.ttf', '.otf'].includes(ext)) category = 'fonts';
        
        // Sometimes JS files from CDN don't have .js extension
        if (relativePath.includes('hotjar-') && ext !== '.js') category = 'js';
        
        const baseName = path.basename(relativePath);
        const uniqueName = getUniqueName(baseName, category);
        const newRelativePath = `assets/${category}/${uniqueName}`;
        const newFullPath = path.join(siteDir, newRelativePath);
        
        fs.renameSync(fullPath, newFullPath);
        movedMap[relativePath] = newRelativePath;
    }
    
    // Replace all occurrences in HTML
    for (const [oldRel, newRel] of Object.entries(movedMap)) {
        // Need to match exactly ./oldRel to avoid partial matches
        const searchPattern = new RegExp(`\\.\\/${oldRel.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
        html = html.replace(searchPattern, `./${newRel}`);
    }
    
    fs.writeFileSync(indexPath, html);
    console.log(`Processed ${siteDir}, moved ${Object.keys(movedMap).length} files.`);
}

processSite('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-1');
processSite('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-2');
