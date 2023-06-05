import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemon } from './pokemon.model';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http:HttpClient) { }


  url:string="https://pokeapi.co/api/v2/pokemon?limit=151%27"
  getPokemons(){
  return this.http.get<any>(this.url)

  }
}
