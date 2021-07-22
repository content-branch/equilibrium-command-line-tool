import { ConfiguredCommand } from '../../configured-command';
import { allowedProperties } from '../../properties';

export default class ConfigSet extends ConfiguredCommand {
  static description = 'set a property value';

  static examples = [
    'eq config:set EQ_CURRENT_APP ckm1w4vy857869go3nsw4mk2ay',
    'eq config:set EQ_SERVER_URL http://localhost:3000',
    'eq config:set EQ_OUTPUT_FORMAT styledJSON',
  ];

  static args = [
    {
      name: 'property',
      required: true,
      description: 'name of property',
    },
    {
      name: 'value',
      required: true,
      description: 'value of property',
    },
  ];

  async command() {
    const { args } = this.parse(ConfigSet);

    const propertyName = args.property;
    const propertyValue = args.value;

    if (!allowedProperties.includes(propertyName)) {
      this.error(`Unknown property '${propertyName}'`);
    }
    this.setConfig(propertyName, propertyValue);

    this.log(`Updated property '${propertyName}'`);
  }
}
