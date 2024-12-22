import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { bold } from 'chalk';
import { RequestMethod, VersioningType } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { configSwagger } from './helpers/swagger.helpers';
//import { GlobalValidationPipe } from 'blade-core';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {});
  const envService = app.get(ConfigService);
  const packageJson = envService.get('packageJson');
  app.use(json({ limit: envService.get('limitRequest') }));
  app.use(urlencoded({ extended: true, limit: envService.get('limitRequest') }));
  app.enableVersioning({ type: VersioningType.URI });
  app.use(compression());
  app.setGlobalPrefix('api', {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });

  //app.useGlobalPipes(new GlobalValidationPipe());
  app.enableCors({
    origin: envService.get('enableCors'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  if (envService.get('environment') !== 'production') {
    configSwagger(app, packageJson);
  }
  const port = envService.get<number>('port');
  await app.listen(port, '0.0.0.0').then(async () => {
    console.info(
      bold.blue(
        `🚀 "${packageJson.name}", version:"${packageJson.version}" API is listening ON PORT`,
        `${await app.getUrl()}/api`,
      ),
    );
  });
}
bootstrap();
