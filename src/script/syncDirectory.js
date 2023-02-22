const fs = require('fs');
const path = require('path');
const PROJECT_DIR = process.cwd();
const ASSETS_DIR = path.join(PROJECT_DIR, 'src', 'assets');

const syncDirectory = () => {
  let inputDir = 'svg';
  let suffixes = 'Icon';

  try {
    const syncingDir = path.join(ASSETS_DIR, inputDir);

    if (!fs.existsSync(syncingDir)) {
      throw new Error(`Directory ${syncingDir} does not exist.`);
    }

    const listFiles = fs.readdirSync(syncingDir);

    // convertSvgDir(syncingDir);

    const listImports = [];
    const listExports = [];

    listFiles
      .filter(file => file.includes('.svg'))
      .forEach(file => {
        const importName =
          file
            .split(/[^\w.]|_/)
            .reduce((acc, curr) => {
              return (acc +=
                curr.charAt(0).toUpperCase() + curr.slice(1).split('.')[0]);
            }, '')
            .replace(suffixes, '') + suffixes;

        listImports.push(`import ${importName} from './${file}';`);
        listExports.push(importName);
      });

    const indexFile = path.join(syncingDir, 'index.ts');
    const indexContent = `${listImports.join('\n')}

export { ${listExports.join(',\n')} };

`;
    fs.writeFileSync(indexFile, indexContent);
  } catch (error) {
    throw new Error(error);
  }
};

syncDirectory();
