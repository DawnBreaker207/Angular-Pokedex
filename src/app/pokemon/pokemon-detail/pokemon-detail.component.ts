import { Pokemon } from '@/app/common/interface/pokemon';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export enum KeyBoardKeys {
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft',
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
}
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent {
  @ViewChild('closeButton') closeButton!: ElementRef;

  constructor(
    private dialogRef: MatDialogRef<PokemonDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemon: Pokemon
  ) {}

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent): void {
    const modalElement = document.querySelector('.mat-dialog-content');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.dialogRef.close();
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (
      event.key === KeyBoardKeys.ArrowLeft ||
      event.key === KeyBoardKeys.ArrowRight
    ) {
      // const direction = event.key === 'ArrowRight' ? 1 : -1;
      // this.changePokemon(direction);
    }

    if (
      event.key === KeyBoardKeys.ArrowUp ||
      event.key === KeyBoardKeys.ArrowDown
    ) {
      if (this.closeButton) {
        // this.closeButton.nativeElement.focus();
        this.dialogRef.close();
      }
    }
  }

  // private changePokemon(direction: number): void {
  //   const newId = this.pokemon.id + direction;
  //   if (newId > 0 && newId <= 151) {
  //     this.pokemonService.pokemon.subscribe(item => {
  //       this.dialogRef.close();
  //       this.dialog.open(PokemonDetailComponent, {
  //         data: item,
  //       });
  //     });
  //     // this.dialogRef.close();
  //   }
  // }
}
