import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  constructor(private router: Router){}
  movies: Movie[] = [
    new Movie(["The best movie ever!"], 1)
  ];
  goToDetailPage(clickedMovie: Movie) {
    this.router.navigate(['movies', clickedMovie.id]);
};
}
