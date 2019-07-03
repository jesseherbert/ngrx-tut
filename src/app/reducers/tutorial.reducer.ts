/*
The purpose of the reducer, in a sense, is to overload based on the type of the action.  The TYPE of the TYPES is controlled 
via typescript and the .ACTIONS file.

This initialState thing is not really part of the magic
*/

//import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'
/*
This Tutorial Actions import is grabbing those custom Types defined in the bottom of tutorial.actions.
It is a way to have typing of the permissible actions that can be taken
*/
import * as TutorialActions from '../actions/tutorial.actions'
import { isNgTemplate } from '@angular/compiler';

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http:/google.com'
}

/////////////
//This is the important part here/////////
/*
Reducer: takes in a state, modifies it, and returns the new state
It is using a javascript feature where a default value is provided to an argument if none is provided by the caller
*/
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL: 
            return [...state, action.payload];

            case TutorialActions.REMOVE_TUTORIAL:
                //state is an array of Tutorial objects
                state.splice(action.payload, 1)
                state.forEach(function (tutorial) {
                })
                return state;

                case TutorialActions.RANDOM_ACTION:
                        //state is an array of Tutorial objects
                        
                        state.forEach(function (tutorial) {
                            console.log("Performing random on " + tutorial.name);
                        })
                        return state;
                
            default:
                return state;
    }
}
