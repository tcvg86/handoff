import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { MarketSectionComponent } from './market-section/market-section.component';
import {FormsModule} from "@angular/forms";
import { PastHandoffsComponent } from './past-handoffs/past-handoffs.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketSectionComponent,
    PastHandoffsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
