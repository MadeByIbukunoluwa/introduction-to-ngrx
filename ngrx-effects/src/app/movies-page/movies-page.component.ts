// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { MovieService } from '../movie-service.service';
// import { Movie, Results } from '../movie';
// @Component({
//   selector: 'app-movies-page',
//   template: `<li *ngFor="let movie of results">
//     <h1>{{ movie.title }}</h1>
//     <p>{{ movie.episode_id }}</p>
//     <p>{{ movie.opening_crawl }}</p>
//     <p>{{ movie.director }}</p>
//     <p>{{ movie.release_date }}</p>
//   </li> `,
//   styleUrls: ['./movies-page.component.scss'],
// })
// export class MoviesPageComponent implements OnInit {
//   movies!: Movie;
//   results!: Results[];
//   constructor(private movieService: MovieService) {}
//   ngOnInit(): void {
//     this.movieService.getAll().subscribe(
//       (movies) =>
//         (this.results = movies.results.map(
//           ({
//             title,
//             episode_id,
//             opening_crawl,
//             director,
//             producer,
//             release_date,
//           }) => {
//             return {
//               title,
//               episode_id,
//               opening_crawl,
//               director,
//               producer,
//               release_date,
//             };
//           }
//         ))
//     );
//   }
// }
// This component has multiple responsibilities - Managing the state of movies ,
//  using the service to perform the side effect (reaching out to an external api to fetch the movies)
//changing the state of movies within the component
// Effects when used along wiht the store decrease the responsibilty of the component 
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieService } from '../movie-service.service';
import { Movie, Results } from '../movie';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movies-page',
  // template: `<li *ngFor="let movie of result$ | async">
  template: `<li *ngFor="let movie of result">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.episode_id }}</p>
    <p>{{ movie.opening_crawl }}</p>
    <p>{{ movie.director }}</p>
    <p>{{ movie.release_date }}</p>
  </li> `,
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {
  // movies$: Observable<>Movie = this.store.select(state => state.movies)
  result!: Results[];
  movies$: Observable<Movie> = this.store.select((state) => state.movies);
  initialResult = this.movies$.subscribe(
    (movies) =>
      (this.result = movies.results.map(
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

  // results!: Results[];
  constructor(private store: Store<{ movies: Movie }>) {}
  ngOnInit() {
    this.store.dispatch({ type: '[Movie Page] Load Movies' });
  }
}
// This component has multiple responsibilities - Managing the state of movies ,
//  using the service to perform the side effect (reaching out to an external api to fetch the movies)
//changing the state of movies within the component
// Effects when used along wiht the store decrease the responsibilty of the component 
