import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';


import { AppModule } from './app.module';
import { setUpSwagger } from './swagger';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });

  await app.init();
  const config = app.get(ConfigService);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  setUpSwagger(app);
  await app.listen(process.env.APP_PORT, () => {
    Logger.log(
      `🔥  App Name : ${config.get<string>('APP_NAME')} 🔥`,
      'Logger-App-Name',
    );
    Logger.log(
      `🎓  Mode : ${config.get<string>('NODE_ENV')} 🎓`,
      'Logger-App-Mode',
    );
    Logger.log(
      `🚀  Server Running on ${config.get<string>('APP_HOST')}:${config.get<number>('APP_PORT')} 🚀 `,
      'Logger-Server-Running',
    );
  });
}
bootstrap();
