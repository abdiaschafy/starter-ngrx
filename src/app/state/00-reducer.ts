import { User } from './../models/user';
import { Action, ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { RootActions, UsersActions } from "./01-actions";
import { HttpErrorResponse } from '@angular/common/http';


export const ROOT_FEATURE_KEY='root';

export interface State {
  readonly [ROOT_FEATURE_KEY]: RootState;
}
export interface RootState {
  appName: string;
  user: User;
  users: User[];
  loaded?: boolean,
  error?: HttpErrorResponse | Error | string
}

const initialState: RootState={
  appName: 'NgRx',
  user: {
    username: '',
    isAdmin: false
  },
  users: [],
  error: null
};

const log=(reducer: ActionReducer<State>): ActionReducer<State> => {
  return (state, action) => {
    const currentState=reducer(state, action);

    console.groupCollapsed(action.type);
    console.log('État précédent ', state);
    console.log('Action ', action);
    console.log('État suivant ', currentState);
    console.groupEnd();

    return currentState;
  }
}

export const metaReducers: MetaReducer[]=[log];

export const rootReducer=createReducer<RootState, Action>(initialState,
  on(RootActions.initApp, (state: RootState) => {

    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(RootActions.changeUserName, (state: RootState, props) => {
    return {
      ...state,
      user: {
        ...state.user,
        username: props.username
      }
    }
  }),
  on(UsersActions.loadUsers, (state: RootState) => {
    return {
      ...state,
      loaded: false
    }
  }),
  on(UsersActions.loadUsersSuccess, (state: RootState, props) => {
    return {
      ...state,
      users: props.users,
      loaded: true
    }
  }),
  on(UsersActions.loadUsersError, (state: RootState, props) => {
    return {
      ...state,
      users: [],
      loaded: true,
      error: props.error
    }
  })
);
