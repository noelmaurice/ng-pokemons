import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BorderCardDirective } from './pokemons/border-card.directive';
import { PokemonTypeColorPipe } from './pokemons/pokemon-type-color.pipe';

import { AppComponent } from './app.component';
import { ListPokemonComponent } from './pokemons/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [AppComponent, BorderCardDirective, PokemonTypeColorPipe, ListPokemonComponent, DetailPokemonComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
