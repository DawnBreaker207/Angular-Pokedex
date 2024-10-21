import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from '@/app/common/interface/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  providers: [PokemonService],
})
export class PokemonListComponent {
  pokemon: Observable<Pokemon[]>;
  showGrid = true;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.setTitle();
    this.pokemon = this.pokemonService.pokemon;
  }
  search(term: string) {
    this.pokemonService.search(term);
  }
}
