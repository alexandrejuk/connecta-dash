import actionCreator from './actionCreator';
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators'

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_EXPIRED = 'LOGIN_EXPIRED';
export const LOGOUT = 'LOGOUT';

export const login = actionCreator(LOGIN);
export const loginSuccess = actionCreator(LOGIN_SUCCESS);
export const loginFailed = actionCreator(LOGIN_FAILED);
export const loginExpired = actionCreator(LOGIN_EXPIRED);

export const loginReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { 
        roles: ['windows']
      };

    case LOGOUT:
      return null;
      
    default:
      return state;
  }
};

export const loginEpic = action$ =>
  action$.pipe(
    ofType('LOGIN'),
    delay(200), 
    mapTo({ type: 'LOGIN_SUCCESS' })
  );