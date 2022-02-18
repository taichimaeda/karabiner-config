import fs from 'fs';
import path from 'path';
import url from 'url';

function preprocess(data) {
    if (Array.isArray(data)) return data.map(item => preprocess(item));
    if (typeof data !== 'object') return data;

    const ret = {};
    for (const oldKey in data) {
        if (data.hasOwnProperty(oldKey)) {
            if (data[oldKey] !== null && data[oldKey] !== undefined) {
                const newKey = oldKey.replace(/[A-Z]/g, match => '_' + match.toLowerCase());
                ret[newKey] = preprocess(data[oldKey]);
            }
        }
    }
    return ret;
}

const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
const sourceDir = path.join(currentDir, '../src/');
const destDir = path.join(currentDir, '../dist/');
const indentSize = 4;

fs.readdirSync(destDir).forEach(destFilename => {
    const destPath = path.join(destDir, destFilename);
    fs.unlink(destPath, error => {
        if (error) {
            throw error;
        }
    });
});

fs.readdirSync(sourceDir).forEach(sourceFilename => {
    if (path.extname(sourceFilename) === '.js' && sourceFilename !== 'index.js') {
        const sourcePath = path.join(sourceDir, sourceFilename);
        import(sourcePath).then(module => {
            const data = preprocess(module.main());
            const json = JSON.stringify(data, null, indentSize);
            const destFilename = path.basename(sourceFilename, path.extname(sourceFilename)) + '.json';
            const destPath = path.join(destDir, destFilename);
            fs.writeFileSync(destPath, json);
        });
    }
});