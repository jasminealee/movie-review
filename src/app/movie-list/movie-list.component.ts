import { Component } from '@angular/core';
import { Review } from '../review.model';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent  {

  constructor(private router: Router){}

  reviews: Review[] = [
    new Review("Endgame", "The best movie ever!", "John", 1)
  ];

  movies: Movie[] = [
    new Movie(["The best movie ever!"], 1)
  ];

  goToDetailPage(clickedReview: Review) {
    this.router.navigate(['reviews', clickedReview.id]);

};

}
