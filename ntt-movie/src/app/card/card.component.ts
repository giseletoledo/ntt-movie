import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Movie } from '../core/movie';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
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

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie; 
  }

  constructor(private dialog: MatDialog) {}

  @ViewChild('dialogContent')
  dialogContent!: TemplateRef<any>;  

  openDialog() {
    this.dialog.open(this.dialogContent, {
      data: {},
      backdropClass: 'modal-backdrop-full',
      hasBackdrop: true,
      disableClose: false
    });
  }
  

  closeDialog() {
    this.dialog.closeAll();
  }
  
}
