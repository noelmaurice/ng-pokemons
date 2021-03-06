import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from './pokemon';

@Component({
	selector: 'pokemon-form',
	templateUrl: './pokemon-form.component.html',
	// l'URL de la feuille de style est indiquée
	styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

	@Input() pokemon: Pokemon; // propriété d'entrée du composant
	types: Array<string>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...
	constructor(
		private pokemonsService: PokemonsService,
		private router: Router) { }

	ngOnInit() {
		// Initialisation de la propriété types
		this.types = this.pokemonsService.getPokemonTypes();
	}

	
	// Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
	selectType($event: any, type: string): void {
		let checked = $event.target.checked;
		if (checked) {
			this.pokemon.types.push(type);
		} else {
			let index = this.pokemon.types.indexOf(type);
			if (index > -1) {
				this.pokemon.types.splice(index, 1);
			}
		}
	}

	// Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
	hasType(type: string): boolean {
		let index = this.pokemon.types.indexOf(type);
		if (index > -1) return true;
		return false;
	}


	// Valide le nombre de types pour chaque pokémon
	isTypesValid(type: string): boolean {
		/**
		 * il n'y a pas plus de 3 pokemons de sélectionné
		 * 
		 * le type courant n'appartient pas au pokémon : permet à l'utilisateur de pouvoir 
		 * désélectionner un type
		 */
		if (this.pokemon.types.length === 1 && this.hasType(type)) {
			return false;
		}
		if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
			return false;
		}

		return true;
	}

	// La méthode appelée lorsque le formulaire est soumis.
	onSubmit(): void {
		console.log("Submit form !");
		
		// routage standard
		// this.goBack();

		/**
		 * 1. le web service est appelé pour enregistrement des données
		 * 2. gestion de la fenêtre à afficher
		 */ 
		this.pokemonsService.updatePokemon(this.pokemon).subscribe(() => this.goBack());
	}

	goBack(): void {
		let link = ['/pokemon', this.pokemon.id];
		this.router.navigate(link);
	}
}