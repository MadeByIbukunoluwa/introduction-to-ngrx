import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store'
import { AppComponent } from './app.component';
import { CounterActionsComponent } from './counter-actions/counter-actions.component';
import { CounterReducerComponent } from './counter-reducer/counter-reducer.component';
import { MyCounterComponent } from './my-counter/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterActionsComponent,
    CounterReducerComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
