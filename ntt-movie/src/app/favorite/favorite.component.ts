import { Component, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  imports: [CommonModule]
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;
  @Input() imdbID: string = '';


  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.isFavorite = this.favoritesService.isFavorite(this.imdbID);
  }

toggleFavorite(): void {
  this.isFavorite = !this.isFavorite;
  if (this.isFavorite) {
    this.favoritesService.addToFavorites(this.imdbID);
  } else {
    this.favoritesService.removeFromFavorites(this.imdbID);
  }
 }
}
