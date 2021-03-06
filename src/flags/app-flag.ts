import { flags } from '@oclif/command';

function getApp(params: any): string | undefined {
  const envApp = process.env.EQ_CURRENT_APP;
  if (envApp) return envApp;

  const configApp = params?.configJSON?.EQ_CURRENT_APP;
  if (configApp) return configApp;

  return undefined;
}
export const app = flags.build({
  char: 'a',
  description: 'app to run command against',
  default: getApp,
});
