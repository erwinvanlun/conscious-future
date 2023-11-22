
/*
** This script will be executed by .husky post-checkout hook
 */
const { execSync } = require('child_process');
const fs = require('fs');

const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

const branchFilePath = './tools/git-branch.const.js';
const branchFileContent = `export const GIT_BRANCH = '${branchName}';\n`;

fs.writeFileSync(branchFilePath, branchFileContent);
