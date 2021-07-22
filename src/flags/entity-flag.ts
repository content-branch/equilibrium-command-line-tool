import { flags } from '@oclif/command';

function getEntity(params: any): string | undefined {
  const envEntity = process.env.EQ_CURRENT_ENTITY;
  if (envEntity) return envEntity;

  const configEntity = params?.configJSON?.EQ_CURRENT_ENTITY;
  if (configEntity) return configEntity;

  return undefined;
}
export const entity = flags.build({
  char: 'e',
  description: 'ID of the entity',
  default: getEntity,
});
