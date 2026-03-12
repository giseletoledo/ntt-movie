import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ContentgroupComponent } from './contentgroup/contentgroup.component';

export const routes: Routes = [
  { path: '', component: ContentgroupComponent },
  { path: 'movie/:imdbID', component: MovieDetailComponent },
  // Redireciona rotas antigas
  { path: 'movies/:imdbID', redirectTo: 'movie/:imdbID' },
  // Rota curinga DEVE ser a última
  { path: '**', redirectTo: '' }
];