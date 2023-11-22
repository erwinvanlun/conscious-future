const {execSync} = require('child_process');
const fs = require('fs');

// Get the current branch or commit ID
let branchOrCommit = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
// Check if we are in detached HEAD state
if (branchOrCommit === 'HEAD') {
    const commitID = execSync('git rev-parse HEAD').toString().trim();
    branchOrCommit = `HEAD-${commitID.slice(0, 7)}`; // Use the first 7 characters of the commit ID
}

const branchFilePath = './tools/git-branch.const.js';
const branchFileContent =
    `// DO NOT EDIT THIS FILE
// This file is automatically generated by a post-checkout Husky hook.
export const GIT_BRANCH = '${branchOrCommit}';\n`;

fs.writeFileSync(branchFilePath, branchFileContent);