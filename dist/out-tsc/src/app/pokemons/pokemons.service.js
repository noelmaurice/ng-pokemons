import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
// le service peut avoir lui-même d'autres dépendances => @Injectable()
let PokemonsService = class PokemonsService {
    // Retourne tous les pokémons
    getPokemons() {
        return POKEMONS;
    }
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id) {
        let pokemons = this.getPokemons();
        for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }
};
PokemonsService = tslib_1.__decorate([
    Injectable()
], PokemonsService);
export { PokemonsService };
//# sourceMappingURL=pokemons.service.js.map