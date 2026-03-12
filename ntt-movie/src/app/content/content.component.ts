import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, of } from 'rxjs';
import { switchMap, filter, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Movie } from '../core/movie';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  imports: [CommonModule, FormsModule, CardComponent]
})
export class ContentComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  displayMovies: Movie[] = [];
  movieTitle: string = '';
  isFilterActive: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  private readonly defaultPosterUrl = 'assets/default-poster.png';

  private searchTrigger$ = new Subject<string>();
  private subs = new Subscription();

  constructor(
    private movieService: MovieService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const searchSub = this.searchTrigger$.pipe(
      filter(query => query.trim().length > 0),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        this.isLoading = true;
        this.errorMessage = '';
        return this.movieService.getMovieByTitle(query).pipe(
          catchError(err => {
            this.errorMessage = 'Nenhum filme encontrado. Tente outro título.';
            console.error('[ContentComponent] Erro na busca:', err);
            return of([]);
          })
        );
      })
    ).subscribe(movies => {
      this.isLoading = false;
      this.movies = movies.map(movie => ({
        ...movie,
        Poster: movie.Poster !== 'N/A' ? movie.Poster : this.defaultPosterUrl
      }));
      this.updateDisplayMovies();
    });

    this.subs.add(searchSub);

    const favSub = this.favoritesService.favoriteIDs$.subscribe(() => {
      this.updateDisplayMovies();
    });
    this.subs.add(favSub);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  fetchMovie(): void {
    const query = this.movieTitle?.trim();
    if (!query) return;
    this.searchTrigger$.next(query);
  }

  updateDisplayMovies(): void {
    if (this.isFilterActive) {
      const favoriteIDs = new Set(this.favoritesService.getFavoriteIDs());
      this.displayMovies = this.movies.filter(m => favoriteIDs.has(m.imdbID));
    } else {
      this.displayMovies = this.movies;
    }
  }

  toggleFavoritesFilter(): void {
    this.isFilterActive = !this.isFilterActive;
    this.updateDisplayMovies();
  }
}