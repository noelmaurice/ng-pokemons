import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from "./pokemons/pokemons.module";
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            PokemonsModule,
            AppRoutingModule // pour l'ordre de déclaration des routes !
        ],
        declarations: [
            AppComponent,
            PageNotFoundComponent
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map