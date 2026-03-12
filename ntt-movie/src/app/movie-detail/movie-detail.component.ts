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
  changeDetection: ChangeDetectionStrategy.OnPush // Atualiza o carregamento dos detalhes
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private cdr: ChangeDetectorRef // Injete o ChangeDetectorRef
  ) {
    console.log('MovieDetailComponent constructor');
  }

  ngOnInit(): void {
    console.log('MovieDetailComponent ngOnInit');
    
    const imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');
    console.log('imdbID:', imdbID);
    
    if (imdbID) {
      this.movieService.getMovieDetails(imdbID).subscribe({
        next: (movie: Movie) => {
          console.log('movie recebido:', movie);
          this.movie = movie;
          this.cdr.markForCheck(); // Força uma verificação de mudanças
        },
        error: (err: any) => {
          console.error('erro:', err);
          this.cdr.markForCheck();
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}