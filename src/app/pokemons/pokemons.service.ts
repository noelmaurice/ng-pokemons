import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { catcherrors, map, tap } from "rxjs";


// le service peut avoir lui-même d'autres dépendances => @Injectable()
@Injectable()
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';

  constructor(private http: HttpClient)
  {

  }
    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
      return POKEMONS;
    }
    
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon {
      let pokemons = this.getPokemons();
    
      for(let index = 0; index < pokemons.length; index++) {

        if(id == pokemons[index].id) {
          return pokemons[index];
        }
      }
    }

    getPokemonTypes(): string[] {
      return [
        'Plante',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol'
      ];
    }
}