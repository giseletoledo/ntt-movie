import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Movie } from '../core/movie';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Verifique se Router está importado
import { FavoriteComponent } from '../favorite/favorite.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule, FavoriteComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() imageUrl: string = ''; 
  @Input() title: string = ''; 
  @Input() year: string = ''; 
  @Input() isFavorite: boolean = false;
  @Input() imdbID: string = '';
  @Input() movie: Movie | undefined;
  selectedMovie: Movie | undefined;
  readonly defaultPosterUrl = './assets/default-poster.png';

  // ADICIONE O CONSTRUTOR COM O ROUTER
  constructor(private router: Router) {}

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie; 
  }

  onImageError(event: Event): void {
  (event.target as HTMLImageElement).src = this.defaultPosterUrl;
  }

  goToDetails() {
    console.log('Navegando para filme:', this.imdbID);
    if (this.imdbID) {
      this.router.navigate(['/movie', this.imdbID]); // Mudou de 'movies' para 'movie'
    }
  }
}