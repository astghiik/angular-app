import { NgModule } from "@angular/core";
import {MoviesComponent} from "./movies.component";
import {AppService} from "../app.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent
  ],
  providers: [
    AppService
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // RouterModule,
    SharedModule
  ]
})

export class MoviesModule { }
