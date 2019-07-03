// Section 1
import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'

// Section 2
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3
//This is an action
export class AddTutorial implements Action {
    //Set the type inside of the object definition, 
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}  //Need this constructor if we are passing in a payload
}

//This is an action
export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

//This will allow us to access the actions in the reducer
// Section 4
export type Actions = AddTutorial | RemoveTutorial