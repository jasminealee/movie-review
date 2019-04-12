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

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
  this.route.params.forEach((urlParameters) => {
    this.movieId = parseInt(urlParameters['id']);
    });
  }
  movies: Movie[] = [
    new Movie(["The best movie ever!"], 1)
  ];
  // goToDetailPage(clickedMovie: Movie) {
  //   this.route.navigate(['movies', clickedMovie.id]);
  // };
}
