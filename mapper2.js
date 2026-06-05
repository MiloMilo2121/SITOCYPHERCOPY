const fs = require('fs');
const path = require('path');

function processSite(siteDir) {
    const indexPath = path.join(siteDir, 'index.html');
    if (!fs.existsSync(indexPath)) return;
    
    let html = fs.readFileSync(indexPath, 'utf-8');
    
    function getAllFiles(dir, fileList = []) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            if (item === '.git' || item === 'index.html') continue;
            const fullPath = path.join(dir, item);
            if (fs.statSync(fullPath).isDirectory()) {
                getAllFiles(fullPath, fileList);
            } else {
                fileList.push(fullPath);
            }
        }
        return fileList;
    }
    
    const allOriginalFiles = getAllFiles(siteDir);
    
    const regex = /(?:src|href|url)=?['"(]\.\/([^/'"]+)['")]/g;
    let match;
    const filenamesToMap = new Set();
    
    while ((match = regex.exec(html)) !== null) {
        filenamesToMap.add(match[1]);
    }
    
    console.log(`Found ${filenamesToMap.size} flat files to map in ${siteDir}`);
    
    for (const file of filenamesToMap) {
        const fileMatch = allOriginalFiles.find(f => f.endsWith('/' + file) || f.endsWith('/' + file.replace(/~/g, '')));
        if (fileMatch) {
            let relativePath = path.relative(siteDir, fileMatch);
            relativePath = './' + relativePath; // prepend ./
            
            const searchPattern = new RegExp(`\\.\\/${file.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
            html = html.replace(searchPattern, relativePath);
        } else {
            console.log(`Could not find original file for ${file}`);
        }
    }
    
    fs.writeFileSync(indexPath, html);
    console.log(`Processed ${siteDir}`);
}

processSite('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-1');
processSite('/Users/marcomilanello/Downloads/SITOCYPHERCOPY/sito-2');
