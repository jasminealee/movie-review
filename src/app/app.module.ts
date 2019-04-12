import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReviewSpecificMovieComponent } from './review-specific-movie/review-specific-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
// import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ReviewSpecificMovieComponent,
    MovieListComponent,
    MovieDetailComponent,
    // StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
