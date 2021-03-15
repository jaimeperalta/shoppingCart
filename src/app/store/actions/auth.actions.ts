import { createAction } from '@ngrx/store';

export const Login = createAction('[Auth] Login');
export const Signup= createAction('[Auth] Signup');
export const Logout= createAction('[Auth] Logout');