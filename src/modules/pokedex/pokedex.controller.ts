import { Controller, Get } from '@nestjs/common';

import {PokedexService} from './pokedex.service';
@Controller('pokedex')
export class PokedexController { 
  
  constructor(private readonly pokedexService:PokedexService){}
  
  @Get()
  async getPokemonInfoBasic(){
    return "message";
  }

  @Get()
  async getPokemonDetailed(){
    return "info pokemos";
  }
  
}
