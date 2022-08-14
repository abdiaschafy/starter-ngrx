import { createAction, props } from "@ngrx/store";

export const initAction=createAction('INIT_APP');

export const changeUserName=createAction('[ROOT] CHANGE_USERNAME', props<{username: string}>());
export const changeIsAdmin=createAction('[ROOT] CHANGE_IS_ADMIN', props<{isAdmin: boolean}>());
