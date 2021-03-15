import { createReducer, on } from '@ngrx/store';
import { Login,Signup,Logout } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
export interface stateAuth { 
    isAuthenticated: boolean; 
    user: null; 
}

export const initialState = {
    isAuthenticated: false,
    user: null,
};

const _authReducer = createReducer(
    initialState,
    on(Login,(state)=>{ 
        return {
            ...state,
            isAuthenticated:true,
        }
    }),
    on(Signup,(state)=>{ 
        return {
            ...state,
            isAuthenticated:true,
        }
    }),
    on(Logout,(state)=>{ 
        return {
            ...state,
            user:null,
            isAuthenticated:false,
        }
    })
)

export function authReducer(state:any, action:any) {
    return _authReducer(state, action);
}