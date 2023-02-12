import { Component } from '@angular/core';
import {createReducer,on} from '@ngrx/store'
import { decrement,increment,reset } from '../counter-actions/counter-actions.component';
@Component({
  selector: 'app-counter-reducer',
  templateUrl: './counter-reducer.component.html',
  styleUrls: ['./counter-reducer.component.scss']
})
export class CounterReducerComponent {

}


export const initialState = 0 ;

export const CounterReducer = createReducer(initialState,
  on(increment,(state)=> state + 1 ),
  on(decrement,(state) => state - 1 ),
  on(reset,(state) => 0)
  )