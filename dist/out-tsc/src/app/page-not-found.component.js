import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib_1.__decorate([
    Component({
        selector: 'page-404',
        template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
    })
], PageNotFoundComponent);
export { PageNotFoundComponent };
//# sourceMappingURL=page-not-found.component.js.map