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
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { EntryModalComponent } from './entry-modal/entry-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCityComponent } from './add-city/add-city.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketSectionComponent,
    PastHandoffsComponent,
    EntryModalComponent,
    DeleteModalComponent,
    AddUserComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormField,
    MatInput
  ],
  providers: [DataService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
