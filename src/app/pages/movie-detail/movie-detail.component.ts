import { Component, Input } from '@angular/core';
import { Movie } from '../../movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  imports:[CommonModule, FormsModule]
})
export class MovieDetailComponent {
  @Input() movie: Movie | null = null;
}


