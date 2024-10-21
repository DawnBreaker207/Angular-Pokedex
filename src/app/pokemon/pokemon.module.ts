import { NgModule } from '@angular/core';

import { SharedModule } from '../common/shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [PokemonRoutingModule, SharedModule],
})
export class PokemonModule {}
