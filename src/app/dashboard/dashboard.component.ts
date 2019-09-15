import { Component, OnInit } from '@angular/core';
import HeroService from '../hero.service';
import Hero from '../Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe( hero => {
      this.heroes = hero.slice(1,5);
    })
    
  }
}
