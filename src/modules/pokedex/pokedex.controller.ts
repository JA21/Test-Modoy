import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { PokedexService } from './pokedex.service';

@Controller('pokemons')
@ApiTags('pokemons')
export class PokedexController {

  constructor(private readonly pokedexService: PokedexService) { }


  @Get('/')
  @ApiResponse({ status: 200, description: ' Homepage  pokemons' })
  @ApiResponse({ status: 404, description: 'Page no found'})
  async getPokemonInfoBasic() {
    const response = await this.pokedexService.allBasePokemons();
    return await response;

  }

  @Get('/poke')
  async getPokemonDetailed() {
    return "info pokemos";
  }

  @Get('/abilities/:id')
  @ApiResponse({ status: 200, description: ' Page  pokemons abilities' })
  @ApiResponse({ status: 404, description: 'Page no found'})
  async getType(@Param('id') id: number) {
    const response = await this.pokedexService.findTypes(id);
    return response;
  }

  @Get('/types/:id')
  @ApiResponse({ status: 200, description: ' Page  pokemons types' })
  @ApiResponse({ status: 404, description: 'Page no found'})
  async getTypes(@Param('id') id: number) {
    const response = await this.pokedexService.findAbilities(id);
    return response;
  }
  @Get('/types/:id')
  @ApiResponse({ status: 200, description: ' Page  pokemons evolutions chain' })
  @ApiResponse({ status: 404, description: 'Page no found'})
  async getEvolutionChain(@Param('id') id: number) {
    const response = await this.pokedexService.findEvolutionChain(id);
    return response;
  }

  
  @Get('/infoBasic/:id')
  @ApiResponse({ status: 200, description: ' Page  pokemons info basics' })
  @ApiResponse({ status: 404, description: 'Page no found'})
  async getInfoBasic(@Param('id') id: number) {
    const response = await this.pokedexService.infoBasic(id);
    return response;
  }

  
}
