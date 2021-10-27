import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable()

export class AppService {
  constructor(private http: HttpClient) { }

  getTopMovie() {
    return this.http.get('https://imdb-api.com/en/API/Top250Movies/' + environment.imdbKey);
  }

  getSearchResults(title: string) {
    return this.http.get(`https://imdb-api.com/en/API/Search/${environment.imdbKey}/${title}`);
  }

  getMovie(id: string) {
    return this.http.get(`https://imdb-api.com/en/API/Title/${environment.imdbKey}/${id}`);
  }

  getTrailer(id: string) {
    return this.http.get(`https://imdb-api.com/en/API/Trailer/${environment.imdbKey}/${id}`);
  }
}
