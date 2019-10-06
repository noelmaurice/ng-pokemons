import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { POKEMONS } from './mock-pokemons';
import { PokemonsService } from "./pokemons.service";
let DetailPokemonComponent = class DetailPokemonComponent {
    // route => request pour récupérer paramètres URL
    // router => response pour redirection
    constructor(route, router, pokemonsService) {
        this.route = route;
        this.router = router;
        this.pokemonsService = pokemonsService;
        // pokemons: Pokemon[] = null;
        this.pokemon = null;
    }
    ngOnInit() {
        // this.pokemons = POKEMONS;
        // propriété snapshot => récupération synchrone du paramètre
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        /*
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
        */
        this.pokemon = this.pokemonsService.getPokemon(id);
        console.log(this.pokemon.name);
    }
    goBack() {
        /**
         * utilisation du router au lieu de la commande :
         * window.history.back();
         * De cette manière c'est la page 'pokemons' qui sera affichée à chaque 'back'
         */
        this.router.navigate(['/pokemons']);
    }
};
DetailPokemonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail-pokemon',
        templateUrl: './detail-pokemon.component.html',
        providers: [PokemonsService]
    })
], DetailPokemonComponent);
export { DetailPokemonComponent };
//# sourceMappingURL=detail-pokemon.component.js.map