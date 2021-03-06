import { ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { changeUserName, initAction } from "./01-actions";

const initialState={
  appName: 'NgRx',
  user: {
    username: '',
    isAdmin: false
  }
};

const log=(reducer: ActionReducer<any>): ActionReducer<any> => {
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

export const rootReducer=createReducer(initialState,
  on(initAction, (state) => {

    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(changeUserName, (state, props) => {
    return {
      ...state,
      user: {
        ...state.user,
        username: props.username
      }
    }
  })
);
