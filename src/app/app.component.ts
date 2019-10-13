import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// import { Pokemon } from './pokemons/pokemon';
// import { POKEMONS } from './pokemons/mock-pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './app.component.html' // path vers fichier HTML
})
export class AppComponent {
  public constructor(private titleService: Title) { }

  public updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
