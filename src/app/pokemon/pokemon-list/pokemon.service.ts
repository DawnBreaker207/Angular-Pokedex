import { Pokemon } from '@/app/common/interface/pokemon';
import { PokemonDataService } from '@/app/common/services/pokemon-data.service';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable, startWith, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  readonly pokemon: Observable<Pokemon[]>;
  private searchTerm = new Subject<string>();
  constructor(
    private title: Title,
    private pokemonDataService: PokemonDataService
  ) {
    this.pokemon = this.pokemonDataService.pokemon.pipe(
      switchMap(pokemon =>
        this.searchTerm.pipe(
          map(term => this.filter(pokemon, term)),
          startWith(pokemon)
        )
      )
    );
  }

  setTitle() {
    this.title.setTitle('Search for Pokémon');
  }
  search(term: string) {
    this.searchTerm.next(term);
  }

  private filter(pokemon: Pokemon[], value: string) {
    return pokemon.filter(p =>
      value ? p.name.toLowerCase().includes(value.toLowerCase()) : pokemon
    );
  }
}
