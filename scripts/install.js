import os from 'os';
import fs from 'fs';
import path from 'path';
import url from 'url';

const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
const sourceDir = path.join(currentDir, '../dist');
const destDir = path.join(os.homedir(), './.config/karabiner/assets/complex_modifications');

fs.readdirSync(destDir).forEach(destFilename => {
    const destPath = path.join(destDir, destFilename);
    fs.unlink(destPath, error => {
        if (error) {
            throw error;
        }
    });
});
fs.readdirSync(sourceDir).forEach(sourceFilename => {
    const sourcePath = path.join(sourceDir, sourceFilename);
    const destPath = path.join(destDir, sourceFilename);
    fs.copyFileSync(sourcePath, destPath);
});
