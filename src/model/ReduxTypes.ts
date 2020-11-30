import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, LoginObject, ReduxState, RegisterObject } from '.';

export type Thunk = ThunkAction<void, ReduxState, unknown, Action>;
export type Dispatch = ThunkDispatch<ReduxState, unknown, Action>;
export type GetState = () => ReduxState;
export type onLogin = (values: LoginObject) => void;
export type onRegister = (values: RegisterObject) => void;
