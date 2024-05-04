import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    );
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  app.useGlobalPipes(new ValidationPipe());

   // Log each request
   app.use((req, res, next) => {
    Logger.log(`Request: ${req.method} ${req.originalUrl} `);
    res.on('finish', () => {
      Logger.log(
        `Response:  ${req.method} ${req.originalUrl} ${res.statusCode}`,
      );
    });
    next();
  });

  app.use(express.json({ limit: '50mb' }));
  app.use(
    express.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    }),
  );
  const configService = app.get(ConfigService);

  const isProduction = configService.get('STAGE') === 'prod';
  if (isProduction) {
    require('newrelic');
  }

  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
