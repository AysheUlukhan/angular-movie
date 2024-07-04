import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,
    MoviesComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'movieApp';
}
