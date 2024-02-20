import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketSectionComponent } from './market-section/market-section.component';
import { PastHandoffsComponent } from './past-handoffs/past-handoffs.component';
import {AddUserComponent} from "./add-user/add-user.component";
import {AddCityComponent} from "./add-city/add-city.component";

const routes: Routes = [
  { path: 'market-section', component: MarketSectionComponent },
  { path: 'past-handoffs', component: PastHandoffsComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-city', component: AddCityComponent },
  { path: '', redirectTo: '/market-section', pathMatch: 'full' }, // Redirect to market-section by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
