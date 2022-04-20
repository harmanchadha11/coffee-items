import {Action, createReducer, on} from '@ngrx/store';
import * as CoffeeActions from './coffee-action';

export const initialState: any = undefined;

const coffeeReducer = createReducer(
  initialState,
  on(CoffeeActions.fillCoffeeList, (state, newList: []) => {
    console.log(newList)
    return newList
  })
)

export function reducer(state: any, action: Action) {
  return coffeeReducer(state, action);
}
