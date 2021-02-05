import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
// importation inutile quand service utilisé
// import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';

import { PokemonsService } from "./pokemons.service";

@Component({
	selector: 'app-list-pokemons',
	templateUrl: './list-pokemon.component.html', // path vers fichier HTML
	// providers: [PokemonsService]
})

export class ListPokemonComponent implements OnInit {

	private pokemons: Pokemon[] = null;
	private title: string = 'Pokémons';

	/**
	 * la variable private de type PokemonsService permet l'injection d'une instance du service dans le composant
	 * l'instance du service est unique pour tout le composant mais aussi pour toute l'application
	 */
	constructor(private router: Router, private pokemonsService: PokemonsService) {
		/**
		 * A NE PAS FAIRE :
		 * 1. Si le constructeur de PokemonsService change, il faut modifier tous les composants qui utilsent ce service
		 * 2. A chaque new, une nouvelle instance de PokemonsService est créée
		 * 3. L'utilisateur ne doit pas connaitre comment PokemonsService est construit
		 */
		// let pokemons = new PokemonsService();
	}

	ngOnInit() {
		// this.pokemons = POKEMONS; // référence déclarée dans les imports

		// utilisation du service pour récupérer tous les pokémons
		// this.pokemons = this.pokemonsService.getPokemons();

		// utilisation d'un Observable à la place du service initial
		this.getPokemons();
	}

	// utilisation d'un Observable à la place du service initial
	getPokemons(): void {
		this.pokemonsService.getPokemons()
			.subscribe(pokemons => this.pokemons = pokemons);
	}

	selectPokemon(pokemon: Pokemon) {
		console.log('Vous avez selectionné ' + pokemon.name);

		// URL + paramètre
		const link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

}
