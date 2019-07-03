import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from './../actions/tutorial.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url){
    //This is how you call an Action.  this.store.dispatch(new **object that has implemented the action interface**) 
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}))
    //If you were to want to trace this to the actual logic, you'd need to look at the reducer.
    //In this case, tutorial.reducer.ts
    //The SWITCH Case in the reducer shows what is performed for each Action . TYPE
  }

  ngOnInit() {
  }

}
