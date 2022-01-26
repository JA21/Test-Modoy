import { Get, HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Pokedex } from "./interface/interface";

//type https://pokeapi.co/api/v2/type/{id or name}/
//listado de abilidades https://pokeapi.co/api/v2/ability/{id or name}/
// info pokemon https://pokeapi.co/api/v2/pokemon/{id or name}/

//evoluciones https://pokeapi.co/api/v2/evolution-chain/{id}
@Injectable()
export class PokedexService {

  constructor(private httpService: HttpService) { }


  allBasePokemons(): Observable<AxiosResponse<Pokedex[]>> {
    const url = "https://pokeapi.co/api/v2";

    return this.httpService.get(url, {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      map(response => response.data),
      catchError(e => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );;
  }


  findTypes(id: number) {
    const url = `https://pokeapi.co/api/v2/type/${id}/`;

    return this.httpService.get(url, {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      map(response => ({
        type: response.data
      })),
      catchError(e => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  findAbilities(id: number) {
    const url = `https://pokeapi.co/api/v2/ability/${id}/`;

    return this.httpService.get(url, {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      map(response => ({
        abilities: response.data
      })),
      catchError(e => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  findEvolutionChain(id: number) {
    const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;

    return this.httpService.get(url, {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      map(response => ({
        type: response.data.results
      })),
      catchError(e => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  async infoBasic(id) {
    const typePokemos = await this.findTypes(id);
    const ability = await this.findAbilities(id);
    console.log(typePokemos)
     return {
      message: 'information basic pokemons',
      typePokemos,
      ability
    }

  }

}
