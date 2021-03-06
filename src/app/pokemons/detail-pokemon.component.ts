import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
// import { POKEMONS } from './mock-pokemons';

import { PokemonsService } from "./pokemons.service";


@Component({
	selector: 'app-detail-pokemon',
	templateUrl: './detail-pokemon.component.html',
	// providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {

	// pokemons: Pokemon[] = null;
	pokemon: Pokemon = null;

    // route => request pour récupérer paramètres URL
    // router => response pour redirection
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private pokemonsService: PokemonsService) {}

	ngOnInit(): void {
		// this.pokemons = POKEMONS;

        // propriété snapshot => récupération synchrone du paramètre
		const id: number = <any>this.route.snapshot.paramMap.get('id');
		console.log(id);
		/*
		for (let i = 0; i < this.pokemons.length; i++) {
			if (this.pokemons[i].id == id) {
				this.pokemon = this.pokemons[i];
			}
		}
		*/
		
		// utilisation du service
    	// this.pokemon = this.pokemonsService.getPokemon(id);
		// console.log(this.pokemon.name);
		
    	// un observable est utilisé à la place du service initial
    	this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
	}


	delete (pokemon: Pokemon) : void {
		this.pokemonsService.deletePokemon(pokemon).subscribe(_ => this.goBack());
	}

	goBack(): void {
        /**
         * utilisation du router au lieu de la commande :
         * window.history.back();
         * De cette manière c'est la page 'pokemons' qui sera affichée à chaque 'back'
         */ 
		this.router.navigate(['/pokemon/all']);
	}

	goEdit(pokemon: Pokemon): void
	{
		let link = ['pokemon/edit', pokemon.id];
		this.router.navigate(link);
	}

}
