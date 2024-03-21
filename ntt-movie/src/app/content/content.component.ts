import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../core/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  movies: Movie[] | undefined;
  movieTitle: string = ''; 
  movieDescription: string = ''; 
  defaultPosterUrl: string = 'assets/default-poster.png'; 
  

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovie();
  }

  fetchMovie(): void {
    if (this.movieTitle) {
      this.movieService.getMovieByTitle(this.movieTitle).subscribe(
        movies => {
          this.movies = movies.map(movie => ({
            ...movie,
            Poster: movie.Poster !== 'N/A' ? movie.Poster : this.defaultPosterUrl
          }));
          console.log(this.movies)
        },
        error => {
          console.error('Erro ao buscar filmes:', error);
        }
      );
    }
  }
}
