import { flags } from '@oclif/command';

function getField(params: any): string | undefined {
  const envField = process.env.EQ_CURRENT_FIELD;
  if (envField) return envField;

  const configField = params?.configJSON?.EQ_CURRENT_FIELD;
  if (configField) return configField;

  return undefined;
}
export const field = flags.build({
  char: 'f',
  description: 'ID of the field',
  default: getField,
});
