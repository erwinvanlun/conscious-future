import * as GitBranch from 'tools/git-branch.const.js';
import { Environment } from '@biodanza/yes';

export const environment: Environment = {
  production: false,
  branchName: GitBranch.GIT_BRANCH
};
