import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ContentgroupComponent } from './contentgroup/contentgroup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contentgroup', pathMatch: 'full' },
  { path: 'contentgroup', component: ContentgroupComponent },
  { path: 'movies/:imdbID', component: MovieDetailComponent },
];


