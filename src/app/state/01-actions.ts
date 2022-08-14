import { User } from './../models/user';
import { createAction, createActionGroup, props, emptyProps } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";

export const RootActions=createActionGroup({
  source: 'ROOT',
  events: {
    'Init app': emptyProps(),
    'Change user name': props<{username: string}>(),
    'Change is admin': props<{ isAdmin: boolean }>(),
  }
})

export const loadUsers=createAction('[USERS_API] LOAD_USERS');
export const loadUsersSuccess=createAction('[USERS_API] LOAD_USERS_SUCCESS', props<{ users: User[] }>());
export const loadUsersError=createAction('[USERS_API] LOAD_USERS_ERROR', props<{ error: HttpErrorResponse | Error | string }>());
