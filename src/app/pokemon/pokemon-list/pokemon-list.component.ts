import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from '@/app/common/interface/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  providers: [PokemonService],
})
export class PokemonListComponent {
  pokemon: Observable<Pokemon[]>;
  showGrid = true;

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) {
    this.pokemonService.setTitle();
    this.pokemon = this.pokemonService.pokemon;
  }

  openPokemonDetail(pokemon: Pokemon): void {
    const dialogRef = this.dialog.open(PokemonDetailComponent, {
      width: '500px',
      data: pokemon,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        return;
      }
    });
  }
  search(term: string) {
    this.pokemonService.search(term);
  }

  handleKeyboard(event: KeyboardEvent, pokemon: Pokemon): void {
    if (event.key === 'Enter' || event.key === '') {
      event.preventDefault();
      this.openPokemonDetail(pokemon);
    }
  }
}
