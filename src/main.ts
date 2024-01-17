import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { NestJsConfig, NodeEnv } from '@types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');
  const configService = app.get<ConfigService<NestJsConfig, true>>(
    ConfigService<NestJsConfig, true>,
  );

  const port = configService.get<number>('port');
  const nodeEnv = configService.get<NodeEnv>('nodeEnv');

  await app.listen(port);

  if (nodeEnv !== 'prd') {
    logger.debug(`Running server on environment: ${nodeEnv}`);
    logger.debug(`Running server on address: ${await app.getUrl()}`);
  }
}

bootstrap();
