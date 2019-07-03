import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { reducer } from './reducers/tutorial.reducer';
import { StoreModule } from '@ngrx/store';
import { Tutorial } from './models/tutorial.model';

export interface AppState {
    readonly tutorial: Tutorial[];
  }

export class AppModule { }