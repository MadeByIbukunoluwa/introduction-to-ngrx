import { Injectable } from '@angular/core';
import {Actions,createEffect,ofType} from '@ngrx/effects'
import { EMPTY, of } from 'rxjs';
import {map,mergeMap,catchError} from 'rxjs/operators'
import { MovieService } from './movie-service.service';
@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies Page] Load Movies'),
      mergeMap(() =>
        this.moviesService
          .getAll()
          .pipe(
            map(
              (movies) => ({
              type: '[Movies API] Movies Loaded Success',
              payload: movies,
            }))
          )
      ),
      catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
    )
  );
  constructor(private actions$: Actions, private moviesService: MovieService) {}
}

// First solve the nullinjector for store problem 
// Then make it work
// then use the map operator reading the docs, to make the result form here so we can use it directly from the template 

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/map