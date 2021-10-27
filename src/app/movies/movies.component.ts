import { Component, OnInit } from "@angular/core";
import {AppService} from "../app.service";

@Component({
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.scss']
})

export class MoviesComponent implements OnInit {
  public searchName: string = '';
  public searchResults: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    // this.appService.getMovie().subscribe(res => {
    //   console.log(res)
    // })
  }

  search() {
    this.appService.getSearchResults(this.searchName).subscribe(res => {
      this.searchResults = res;
      console.log(this.searchResults)
    })
  }
}
