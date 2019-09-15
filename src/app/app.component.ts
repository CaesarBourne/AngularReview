import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dashboard: boolean = true;
  heroes: boolean;
 
  title = 'reviewApp';

  switchDash(){
    this.dashboard = true
    this.heroes = false;
  }
  switchHero(){
    this.heroes = true;
    this.dashboard = false;
  }
}
