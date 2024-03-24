import { EnvConfig, EnvEnum } from './config.interface';

const devConfig: EnvConfig = {
  port: 3001,
  mongoseUri: 'mongodb://localhost:27017',
  options: {
    connectionName: 'nest_ponder',
    useFactory: (...args) => {
      return {
        uri: 'mongodb://localhost:27017',
        dbName: 'nest_ponder_db',
      };
    },
  },
  env:EnvEnum.DEV,
};

export default devConfig;
