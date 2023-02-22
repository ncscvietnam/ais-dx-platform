const fs = require('fs');
const path = require('path');
const readline = require('readline');

const PROJECT_DIR = process.cwd();
const ASSETS_DIR = path.join(PROJECT_DIR, 'src', 'assets');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readSvgDir = () => {
  let inputDir = 'svg';

  rl.question(
    `Enter the directory of svg (default: ${inputDir}): `,
    dirAnswer => {
      inputDir = dirAnswer || inputDir;
      rl.close();
    },
  );

  rl.on('close', () => {
    try {
      const syncingDir = path.join(ASSETS_DIR, inputDir);

      if (!fs.existsSync(syncingDir)) {
        throw new Error(`Directory ${syncingDir} does not exist.`);
      }

      convertSvgDir(syncingDir);
    } catch (error) {
      throw new Error(error);
    }
  });
};

readSvgDir();

const fillRegex = /fill="#*\w+"/g;
const strokeRegex = /stroke="#*\w+"/g;

const convertSvgDir = dir => {
  const listFiles = fs.readdirSync(dir);

  listFiles
    .filter(file => file.includes('.svg'))
    .forEach(file => {
      const svgFile = path.join(dir, file);
      const svgContent = fs.readFileSync(svgFile, 'utf8');

      const replacedContent = strokeRegex.test(svgContent)
        ? svgContent.replace(strokeRegex, 'stroke="currentColor"')
        : fillRegex.test(svgContent)
        ? svgContent.replace(fillRegex, 'fill="currentColor"')
        : svgContent.replace(/<svg/g, '<svg fill="currentColor"');

      fs.writeFileSync(svgFile, replacedContent, 'utf8');
    });
};

module.exports = {
  convertSvgDir,
};
