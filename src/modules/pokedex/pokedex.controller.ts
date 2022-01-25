import { Controller, Get } from '@nestjs/common';

import {PokedexService} from './pokedex.service';
@Controller('pokedex')
export class PokedexController { 
  
  constructor(private readonly pokedexService:PokedexService){}
  
  @Get('/')
  async getPokemonInfoBasic(){
      const response= await this.pokedexService.allBasePokedex();
      return await response;
    
  }

  @Get()
  async getPokemonDetailed(){
    return "info pokemos";
  }
  
}
