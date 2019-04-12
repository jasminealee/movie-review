import { Component, OnInit } from '@angular/core';
import { Review } from '../review.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';}

@Component({
  selector: 'app-review-specific-movie',
  templateUrl: './review-specific-movie.component.html',
  styleUrls: ['./review-specific-movie.component.css']
})

export class ReviewSpecificMovieComponent {
  constructor(private router: Router){}

  reviews: Review[] = [
    new Review("Endgame", "The best movie ever!", "John", 1)
  ];

  // goToDetailPage(clickedReview: Review) {
  //   this.router.navigate(['reviews', clickedReview.id]);

}
}
