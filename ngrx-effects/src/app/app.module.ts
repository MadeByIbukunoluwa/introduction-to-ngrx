import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { MoviesEffects } from './movies.effects';

@NgModule({
  declarations: [AppComponent, MoviesPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([MoviesEffects]),
  ],
  providers: [],
  // Another way of registering effects is by putting it as part of your providers
  // providers: [MoviesEffects,{
  //   provide:USER_PROVIDED_EFFECTS,
  //   multi:true,
  //   useValue:[MoviesEffects]
  // }],
  bootstrap: [AppComponent],
})
export class AppModule {}
