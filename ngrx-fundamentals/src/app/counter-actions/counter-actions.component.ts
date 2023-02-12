import { Component } from '@angular/core';
import {createAction} from '@ngrx/store'
@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent {

}
export const increment = createAction('[Counter Component] Increment')
export const decrement = createAction('[Counter Component] Decrement')

export const reset = createAction('[Counter Component] Reset')


