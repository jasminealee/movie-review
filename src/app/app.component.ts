import { Component } from '@angular/core';
import { ReviewSpecificMovieComponent } from './review-specific-movie/review-specific-movie.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Review';
}
