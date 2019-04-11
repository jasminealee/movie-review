import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReviewSpecificMovieComponent } from './review-specific-movie/review-specific-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
const appRoutes: Routes = [

{
  path: '',
  component: WelcomeComponent
},
{
  path: 'review-specific-movie',
  component: ReviewSpecificMovieComponent
},
{
  path: 'movie-list',
  component: MovieListComponent
},
{
  path: 'movies/:id',
  component: MovieDetailComponent
},
{
  path: 'reviews/:id',
  component: ReviewSpecificMovieComponent
}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
 
