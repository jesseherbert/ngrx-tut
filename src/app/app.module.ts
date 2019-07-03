import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

@NgModule({
  declarations: [
      AppComponent,
      ReadComponent,
      CreateComponent
  ],
  imports: [
      BrowserModule,
      /*
      The forRoot method returns an NgModule and its provider dependencies.
      It allows us to keep variables synchronized across components, even with lazy loading
      The need for this with NGRX is critical, to access the StoreModule and synchronize it across the App
      */
      StoreModule.forRoot({
          tutorial:reducer
      }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
