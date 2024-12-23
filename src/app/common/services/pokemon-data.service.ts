import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  pokemon: Observable<Pokemon[]>;
  constructor(private http: HttpClient) {
    this.pokemon = this.http
      .get<Pokemon[]>('/api/pokemon')
      // .get<Pokemon[]>('/api/pokemon.json')
      .pipe(map(pokemon => pokemon.map(p => this.setPokemon(p))));
    shareReplay(1);
  }
  private setPokemon(pokemon: Pokemon) {
    pokemon.name = upperCaseName(pokemon.name);
    return pokemon;
  }
}
function upperCaseName(val: string) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
