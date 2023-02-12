import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie, Results } from '../movie';
@Component({
  selector: 'app-movies-page',
  template: `<li *ngFor="let movie of results">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.episode_id }}</p>
    <p>{{ movie.opening_crawl }}</p>
    <p>{{ movie.director }}</p>
    <p>{{ movie.release_date }}</p>
  </li> `,
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {
  movies!: Movie;
  results!: Results[];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getAll().subscribe(
      (movies) =>
        (this.results = movies.results.map(
          ({
            title,
            episode_id,
            opening_crawl,
            director,
            producer,
            release_date,
          }) => {
            return {
              title,
              episode_id,
              opening_crawl,
              director,
              producer,
              release_date,
            };
          }
        ))
    );
  }
}
