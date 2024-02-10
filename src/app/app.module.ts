import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { MarketSectionComponent } from './market-section/market-section.component';
import {FormsModule} from "@angular/forms";
import { PastHandoffsComponent } from './past-handoffs/past-handoffs.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    MarketSectionComponent,
    PastHandoffsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [DataService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
