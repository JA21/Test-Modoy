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


  allBasePokedex(): Observable<AxiosResponse<Pokedex[]>> {
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


}
