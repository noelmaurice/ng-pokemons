import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PokemonRoutingModule } from "./pokemons-routing.module";

import { PokemonsService } from "./pokemons.service";

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from "./edit-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form.component";
import { PokemonSearchComponent } from "./search-pokemon.component";
import { LoaderComponent } from "../loader.component";

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

import { AuthGuardService } from "../auth-guard.service";

@NgModule({
	imports: [
		CommonModule, // module fils : module root => BrowserModule
		FormsModule, // gestion du formulaire
		PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		PokemonFormComponent,
		PokemonSearchComponent,
		LoaderComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	providers: [
		PokemonsService,
		AuthGuardService
	]
})
export class PokemonsModule { }