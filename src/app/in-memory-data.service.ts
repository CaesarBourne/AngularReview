import { Injectable } from '@angular/core';
import Hero from './Hero';
import { InMemoryDbService } from "angular-in-memory-web-api";
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes= [
    {id: 12, name: "Power Rangers"},
    {id: 13, name: "Iron Man"},
    {id: 14, name: "Spider man"},
    {id: 15, name: "Superman"},
    {id: 16, name: "Batman"},
    {id: 17, name: "Cyclops"},
    {id: 18, name: "Flash"},
    {id: 19, name: "Bourne"},
    {id: 22, name: "Wolverine"},
    {id: 24, name: "Wonder Woman"}
    ]
    return {heroes}
  }


  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max( ...heroes.map( hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
