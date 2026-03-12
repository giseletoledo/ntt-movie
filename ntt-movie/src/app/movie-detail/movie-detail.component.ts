import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Movie } from '../core/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { CommonModule, Location, UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  imports: [CommonModule, UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  readonly defaultPosterUrl = './assets/default-poster.png';

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');

    if (imdbID) {
      this.movieService.getMovieDetails(imdbID).subscribe({
        next: (movie: Movie) => {
          this.movie = {
            ...movie,
            Poster: movie.Poster !== 'N/A' ? movie.Poster : this.defaultPosterUrl
          };
          this.cdr.markForCheck();
        },
        error: (err: any) => {
          console.error('erro:', err);
          this.cdr.markForCheck();
        }
      });
    }
  }
onImageError(event: Event): void {
  (event.target as HTMLImageElement).src = this.defaultPosterUrl;
}
  goBack(): void {
    this.location.back();
  }
}