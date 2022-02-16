import { CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokedexController } from './pokedex.controller';
import { PokedexService } from './pokedex.service';
@Module({
  imports: [HttpModule,CacheModule.register()],
  providers: [PokedexService],
  controllers: [PokedexController]
})
export class PokedexModule { }
