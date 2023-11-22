const { execSync } = require('child_process');
const fs = require('fs');

const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

const environmentFilePath = './apps/web/src/environments/environment.ts';
let environmentFileContent = fs.readFileSync(environmentFilePath, { encoding: 'utf8' });
environmentFileContent = environmentFileContent.replace(/branchName: '.*'/, `branchName: '${branchName}'`);

fs.writeFileSync(environmentFilePath, environmentFileContent);
