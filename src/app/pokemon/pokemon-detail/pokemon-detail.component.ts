import { Pokemon } from '@/app/common/interface/pokemon';
import { PokemonDataService } from '@/app/common/services/pokemon-data.service';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map, mergeMap, Observable, tap } from 'rxjs';

export enum KeyBoardKeys {
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft',
}
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnDestroy {
  pokemon: Observable<Pokemon>;
  show = true;
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pokemonDataService: PokemonDataService
  ) {
    this.pokemon = this.activatedRoute.params.pipe(
      distinctUntilChanged(),
      mergeMap(params => this.getPokemon(params['id']) as Observable<Pokemon>),
      tap(pokemon =>
        this.title.setTitle(`Pokémon #${pokemon.id} ${pokemon.name}`)
      )
    );
  }

  ngOnDestroy(): void {
    this.title.setTitle('Search for Pokémon');
  }
  close(show: boolean) {
    if (!show) {
      this.router.navigateByUrl('/pokemon');
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KeyBoardKeys.ArrowRight) {
      const paramId = +this.activatedRoute.snapshot.params['id'];
      const id = paramId === 1 ? 151 : paramId - 1;
      this.router.navigateByUrl(`/pokemon/${id}`);
    }

    if (event.key === KeyBoardKeys.ArrowLeft) {
      const paramId = +this.activatedRoute.snapshot.params['id'];
      const id = paramId < 151 ? paramId + 1 : 1;
      this.router.navigateByUrl(`/pokemon/${id}`);
    }
  }

  private getPokemon(id: string) {
    return this.pokemonDataService.pokemon.pipe(
      map(pokemon => pokemon.find(p => p.id === +id))
    );
  }
}
