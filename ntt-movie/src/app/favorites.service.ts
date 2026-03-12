import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './core/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  private favorites$ = new BehaviorSubject<{ imdbID: string; isFavorite: boolean }[]>([]);


  constructor() {
  const storedFavorites = localStorage.getItem('favoriteMovies');
  if (storedFavorites) {
    try {
      this.favorites$.next(JSON.parse(storedFavorites));
    } catch (error) {
      console.error('Error parsing stored favorites:', error);
    }
  }
}

get favoriteIDs$(): Observable<string[]> {
  return this.favorites$.pipe(
    map(favorites => favorites.filter(f => f.isFavorite).map(f => f.imdbID))
  );
}

isFavorite(imdbID: string): boolean {
  return this.favorites$.getValue().some(f => f.imdbID === imdbID);
}

getFavoriteIDs(): string[] {
  return this.favorites$.getValue().filter(f => f.isFavorite).map(f => f.imdbID);
}
  addToFavorites(imdbID: string): void {
  const current = this.favorites$.getValue();
  if (current.some(f => f.imdbID === imdbID)) return; // idempotente
  this.favorites$.next([...current, { imdbID, isFavorite: true }]);
  this.saveFavorites();
}

removeFromFavorites(imdbID: string): void {
  const updated = this.favorites$.getValue().filter(f => f.imdbID !== imdbID);
  this.favorites$.next(updated);
  this.saveFavorites();
}

  getFavoritesInList(movies: any[]): any[] {
    const favoriteIDs = this.getFavoriteIDs();
    //console.log(movies.filter(movie => favoriteIDs.includes(movie.imdbID)))
    return movies.filter(movie => favoriteIDs.includes(movie.imdbID));
  }

  private saveFavorites(): void {
  localStorage.setItem('favoriteMovies', JSON.stringify(this.favorites$.getValue()));
}
 
}
