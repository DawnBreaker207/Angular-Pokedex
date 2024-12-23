import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Pokemon } from '../interface/pokemon';
import { environment } from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  baseUrl = environment.apiUrl;
  pokemon: Observable<Pokemon[]>;
  constructor(private http: HttpClient) {
    this.pokemon = this.http
      .get<Pokemon[]>(`${this.baseUrl}/pokemon.json`)
      .pipe(
        map(pokemon => pokemon.map(p => this.setPokemon(p))),
        shareReplay(1)
      );
  }
  private setPokemon(pokemon: Pokemon) {
    pokemon.name = upperCaseName(pokemon.name);
    return pokemon;
  }
}
function upperCaseName(val: string) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
