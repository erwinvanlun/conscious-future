export interface Environment {
  production: boolean;
  branchName?: string;
}

// copied from RW, useful?
export type WindowWithEnv = Window & typeof globalThis & { env: Environment };
