import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SmartWebComponent } from './smart-web/smart-web.component';

const routes: Routes = [
  {path:"heroes", component: HeroesComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"", redirectTo:"/dashboard", pathMatch:"full" },
  {path:"detail/:id", component: HeroDetailComponent},
  {path: "smart", component: SmartWebComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
