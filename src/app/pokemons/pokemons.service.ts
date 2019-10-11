import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';

  constructor(private http: HttpClient) { }

  /** GET pokemons */
  // le flux retourné contiendra un tableau de pokémons
  getPokemons(): Observable<Pokemon[]> {
    // requête HTTP sur l'URL passé en paramètre : retourne un flux qui contiendra un tableau de pokémons
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      // affichage d'un message sur l'action
      tap(_ => this.log(`fetched pokemons`)),
      // gestion des erreurs éventuelles
      catchError(this.handleError('getPokemons', []))
    );
  }



  /* handleError */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation + ' failed: ' + error.message);

      // of() => le résultat est retourné en tant qu'observateur du type générique
      return of(result as T);
    };
  }

  /* log */
  private log(log: string) {
    console.info(log);
  }

  /** GET pokemon */
  getPokemon(id: number): Observable<Pokemon> {
    const url = this.pokemonsUrl + '/' + id;

    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log('fetched pokemon id=' + id)),
      catchError(this.handleError<Pokemon>('getPokemon id=' + id))
    );
  }

  /** GET types */
  getPokemonTypes(): Array<string> {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal',
      'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }

  /** PUT pokemon */
  updatePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }

  /** DELETE pokemon */
  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  /* GET pokemons search */
  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      // si le terme de recherche n'existe pas, on renvoie un tableau vide.
      return of([]);
    }

    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap(_ => this.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    );
  }

}