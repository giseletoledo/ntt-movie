import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;
  @Input() imdbID: string = '';
  
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.saveFavoriteState();
  }

  saveFavoriteState(): void {
    const favoriteData = {
      imdbID: this.imdbID,
      isFavorite: this.isFavorite,
    };
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteData));
  }
}
