import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';

import { AuthGuardService } from "../auth-guard.service";

// les routes du module Pokémon : gestion sans le guard
/**
const pokemonsRoutes: Routes = [
	{ path: 'pokemons', component: ListPokemonComponent },
	{ path: 'pokemon/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuardService] },
	{ path: 'pokemon/:id', component: DetailPokemonComponent }
];
*/

// les routes du module Pokémon : gestion avec le guard
const pokemonsRoutes: Routes = [
	{
		// préfixe des routes
		path: 'pokemon',
		// niveau de sécurité
		canActivate: [AuthGuardService],
		// routes concernées
		children: [
			{ path: 'all', component: ListPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent },
			{ path: ':id', component: DetailPokemonComponent }
		],
	}
];

@NgModule({
	imports: [
		// module fils => méthode forChild()
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }