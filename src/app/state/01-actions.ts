import { User } from './../models/user';
import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";

export const initAction=createAction('INIT_APP');

export const changeUserName=createAction('[ROOT] CHANGE_USERNAME', props<{username: string}>());
export const changeIsAdmin=createAction('[ROOT] CHANGE_IS_ADMIN', props<{ isAdmin: boolean }>());

export const loadUsers=createAction('[USERS_API] LOAD_USERS');
export const loadUsersSuccess=createAction('[USERS_API] LOAD_USERS_SUCCESS', props<{ users: User[] }>());
export const loadUsersError=createAction('[USERS_API] LOAD_USERS_ERROR', props<{ error: HttpErrorResponse | Error | string }>());
