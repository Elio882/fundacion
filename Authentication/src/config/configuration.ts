import { join } from 'path';

export default () => {
  const locatePackagejson = process.cwd();
  let pm2 = false;
  if (locatePackagejson.includes('dist')) {
    pm2 = true;
  }
  return {
    packageJson: require(join(process.cwd(), pm2 ? '../package.json' : 'package.json')),
    port: parseInt(process.env.ENV_PORT, 10) || 8001,
    secretKey: process.env.SECRET_KEY,
    tokenExpiresIn: process.env.TOKEN_EXPIRES_IN || '1d',
    enableCors: process.env.ENVIRONMENT === 'production' ? process.env.CORS_ORIGIN.split(',') : '*',
  };
};
