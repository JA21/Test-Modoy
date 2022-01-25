import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';


import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });

  await app.init();

   const config = app.get(ConfigService); 
  
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.get<number>('app.port'), () => {
    Logger.log(
      `🔥  App Name : ${config.get<string>('app.name')} 🔥`,
      'Logger-App-Name',
    );
    Logger.log(
      `🎓  Mode : ${config.get<string>('app.env')} 🎓`,
      'Logger-App-Mode',
    );
    Logger.log(
      `🚀  Server Running on ${config.get<string>('app.host')}:${config.get<number>('app.port')} 🚀 `,
      'Logger-Server-Running',
    );
  });
}
bootstrap();
