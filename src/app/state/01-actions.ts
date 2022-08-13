import { createAction, props } from "@ngrx/store";

export const initAction=createAction('INIT_APP');

export const changeUserName=createAction('CHANGE_USERNAME', props<{username: string}>());
