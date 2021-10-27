import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ToDoListModule} from "./to-do-list/to-do-list.module";
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MoviesModule} from "./movies/movies.module";
import {HttpClientModule} from "@angular/common/http";
// import {TranslatePipe} from "./pipes/translate.pipe";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToDoListModule,
    MoviesModule,
    MatToolbarModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
