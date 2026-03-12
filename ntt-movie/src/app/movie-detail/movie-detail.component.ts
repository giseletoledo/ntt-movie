import { Component, Input } from '@angular/core';
import { Movie } from '../core/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { CommonModule, Location, UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  imports: [CommonModule, UpperCasePipe]
})
export class MovieDetailComponent {
  @Input() movie: Movie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
  const imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');
  console.log('imdbID:', imdbID);
  if (imdbID) {
    this.movieService.getMovieDetails(imdbID).subscribe({
      next: movie => {
        console.log('movie:', movie);
        this.movie = movie;
      },
      error: err => console.error('erro:', err)
    });
  }
}

  goBack(): void {
    this.location.back();
  }
}
