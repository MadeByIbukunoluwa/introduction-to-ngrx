import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movies-page',
  template:`<li *ngFor="let movie of movies">
      {{movie.name}}
  </li>
  
  `,
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit{
  movies:Movie[]

  constructor(private movieService:MovieService) {}
  this.movieService.
}
