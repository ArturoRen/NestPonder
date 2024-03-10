import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfig } from './config.interface';
import devConfig from './development.config';

function getConfig(configService:ConfigService): EnvConfig {
  switch (process.env.ENV) {
    case 'test':
    case 'dev':
    case 'prod':
    case 'stag':
    default: return devConfig;
  }
}

export { getConfig };
