import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import  appConfig  from './modules/@common/app.config';

import {PokedexModule} from './modules/pokedex/pokedex.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache:true,
      expandVariables: true, 
      envFilePath:'.env',
      load:[appConfig],
    }),
  PokedexModule
  ],
  controllers: [AppController],
  providers: [
    AppService,  
  ],
})
export class AppModule {}
