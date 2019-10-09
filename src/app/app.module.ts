import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { PokemonsModule } from "./pokemons/pokemons.module";

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
		PokemonsModule, // L'ordre de chargement des modules est très important
		AppRoutingModule // pour l'ordre de déclaration des routes !
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }