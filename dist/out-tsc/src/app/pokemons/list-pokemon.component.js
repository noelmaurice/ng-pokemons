import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PokemonsService } from "./pokemons.service";
let ListPokemonComponent = class ListPokemonComponent {
    /**
     * la variable private de type PokemonsService permet l'injection d'une instance du service dans le composant
     * l'instance du service est unique pour tout le composant mais aussi pour toute l'application
     */
    constructor(router, pokemonsService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemons = null;
        this.title = 'Pokémons';
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
        this.pokemons = this.pokemonsService.getPokemons();
    }
    selectPokemon(pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
        // URL + paramètre
        const link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
};
ListPokemonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-pokemons',
        templateUrl: './list-pokemon.component.html',
        providers: [PokemonsService]
    })
], ListPokemonComponent);
export { ListPokemonComponent };
//# sourceMappingURL=list-pokemon.component.js.map