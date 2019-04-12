import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId: number = null;
  constructor(private route: ActivatedRouter, private location: Location) {}

  ngOnInit() {
  }
  movies: Movie[] = [
    new Movie(["The best movie ever!"], 1)
  ];
  goToDetailPage(clickedMovie: Movie) {
    this.route.navigate(['movies', clickedMovie.id]);
  };
}
