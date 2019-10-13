import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { PokemonsModule } from "./pokemons/pokemons.module";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		// simulation d'un serveur distant : retirer l'import quand le serveur distant sera fonctionnel
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
		PokemonsModule, // L'ordre de chargement des modules est très important
		LoginRoutingModule,
		AppRoutingModule // pour l'ordre de déclaration des routes !
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PageNotFoundComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }