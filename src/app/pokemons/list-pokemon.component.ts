import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemon.component.html' // path vers fichier HTML
})

export class ListPokemonComponent implements OnInit {

  private pokemons: Pokemon[] = null;
  private title: string = 'Pokémons';

  constructor(private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS; // référence déclarée dans les imports
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);

    // URL + paramètre
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
