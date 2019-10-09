import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'edit-pokemon',
  template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
		<p class="center">
			<img *ngIf="pokemon" [src]="pokemon.picture"/>
    </p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
  `,

  /**
   * [pokemon]="pokemon" : liaison de propriété
   * 
   * "pokemon" : pokemon d'entrée du composant
   * 
   * [pokemon] : liaison vers attribut pokemon de la classe EditPokemonComponent
   * 
   * pokemon-form : sélecteur du formulaire
   */
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

}