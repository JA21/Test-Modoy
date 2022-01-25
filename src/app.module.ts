import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios'
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {PokedexModule} from './modules/pokedex/pokedex.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache:true,
      expandVariables: true, 
    }),
  PokedexModule
  ],
  controllers: [AppController],
  providers: [
    AppService,  
  ],
})
export class AppModule {}
