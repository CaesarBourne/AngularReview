import { Component, OnInit } from '@angular/core';
import Hero from "../Hero"
import {HeroList} from "../mock-heroes"
import HeroService from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroservice: HeroService) {

   }
  heroes: Hero[];
 selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroservice.getHeroes().subscribe( hero=> this.heroes = hero );    
  }

  addHero(name: string): void{
    name = name.trim();
    if(!name){
      return;
    }
    
    this.heroservice.addHero({name} as Hero)
    .subscribe(hero => this.heroes.push(hero));
  }
  deleteHero(hero: Hero){
    this.heroes = this.heroes.filter(her => hero !== her);
    this.heroservice.deleteHero(hero)
    .subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
