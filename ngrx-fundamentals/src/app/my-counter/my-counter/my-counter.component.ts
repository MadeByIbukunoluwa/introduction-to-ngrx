import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import {Store} from '@ngrx/store'
import { increment,decrement,reset } from 'src/app/counter-actions/counter-actions.component';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
count$ : Observable<number> = new Observable<number>()
constructor(private store:Store<{count:number}>){
  // Connect this this.$count to the current store `count` state
  this.count$ = store.select('count')
}
 increment() {
    // Dispatch an action that decrements 
    this.store.dispatch(increment())
 }
 decrement(){
    // Dispatch an action that increments 
    this.store.dispatch(decrement())
 }
 reset() {
    // Dispatch an action that resets to 0
    this.store.dispatch(reset())
 }
}
