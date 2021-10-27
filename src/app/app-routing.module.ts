import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {AppComponent} from "./app.component";
import {MoviesComponent} from "./movies/movies.component";
import {MovieDetailsComponent} from "./movies/movie-details/movie-details.component";

const routes: Routes = [
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
