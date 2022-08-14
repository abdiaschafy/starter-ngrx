import { User } from './../models/user';
import { Action, ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { changeUserName, initAction } from "./01-actions";


export interface State {
  root: RootState;
}
export interface RootState {
  appName: string;
  user: User;
}

const initialState: RootState={
  appName: 'NgRx',
  user: {
    username: '',
    isAdmin: false
  }
};

const log=(reducer: ActionReducer<State>): ActionReducer<State> => {
  return (state, action) => {
    const currentState=reducer(state, action);

    console.groupCollapsed(action.type);
    console.log('Etat précédent ', state);
    console.log('Action ', action);
    console.log('Etat suivant ', currentState);
    console.groupEnd();

    return currentState;
  }
}

export const metaReducers: MetaReducer[]=[log];

export const rootReducer=createReducer<RootState, Action>(initialState,
  on(initAction, (state: RootState) => {

    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(changeUserName, (state: RootState, props) => {
    return {
      ...state,
      user: {
        ...state.user,
        username: props.username
      }
    }
  })
);
