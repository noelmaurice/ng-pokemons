import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
// les routes du module Pokémon
const pokemonsRoutes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent }
];
let PokemonRoutingModule = class PokemonRoutingModule {
};
PokemonRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            // module fils => méthode forChild()
            RouterModule.forChild(pokemonsRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
], PokemonRoutingModule);
export { PokemonRoutingModule };
//# sourceMappingURL=pokemons-routing.module.js.map