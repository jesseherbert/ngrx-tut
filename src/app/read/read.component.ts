import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial') //This is how we access the store, we want the "tutorial" slice in this case
    //the this.tutorials is coming from app.module.ts forRoot({ tutorial:reducer })
    //that is subsequently calling the reducer function with no action.type, which returns the original state unchanged
    //this whole thing has been about not being able to reference the data directly, as illustrated by having to grab it
    //via this string above.
  }

  performLog(){
    console.log(this.tutorials);
    this.tutorials.subscribe({
      next(item) { console.log('1st subscribe: ' + item);
    this.actual.push(item);
    },
    complete() { console.log(this.actual); }
    });
  }

  delTutorial(index) {
    //If you want to trace this back to the actual logic, you'd need to look at the reducer.
    //In this case, tutorial.reducer.ts
    //The SWITCH Case in the reducer shows what is performed for each Action . TYPE
    //This instance is using the TutorialActions.RemoveTutorial type (AKA REMOVE_TUTORIAL), so when you look at the reducer
    //look for the case that corresponds with REMOVE_TUTORIAL
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  ngOnInit() {
  }

}
