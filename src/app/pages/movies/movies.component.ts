import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Movies } from '../../movie.data';
import { Movie } from '../../movie';
import {FormsModule} from '@angular/forms'
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieDetailComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  title = "App Movie"
  movies = Movies;
  selectedMovie: Movie | null = null;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
