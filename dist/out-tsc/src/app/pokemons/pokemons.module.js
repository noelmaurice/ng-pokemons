import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from "./pokemons-routing.module";
let PokemonsModule = class PokemonsModule {
};
PokemonsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            PokemonRoutingModule
        ],
        declarations: [
            ListPokemonComponent,
            DetailPokemonComponent,
            BorderCardDirective,
            PokemonTypeColorPipe
        ],
        providers: []
    })
], PokemonsModule);
export { PokemonsModule };
//# sourceMappingURL=pokemons.module.js.map