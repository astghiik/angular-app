import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'movie-details.component.html',
  styleUrls: ['../movies.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  public id: any;
  public data: any;
  public trailerUrl: any;

  constructor(private route: ActivatedRoute,
              private appService: AppService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.appService.getMovie(this.id).subscribe(res => {
      this.data = res;
      console.log(res)
    })
    this.appService.getTrailer(this.id).subscribe(res => {
      console.log(res)
      this.trailerUrl = res;
    })
  }
}

