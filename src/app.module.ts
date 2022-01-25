import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import appConfig from './modules/@common/app.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache:true,
      expandVariables: true,
      load: [appConfig],
   
    }),
  
  ],
  controllers: [AppController],
  providers: [
    AppService,  
  ],
})
export class AppModule {}
