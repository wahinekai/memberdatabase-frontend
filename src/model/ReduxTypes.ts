/**
 * @file Helper types for Redux actions & reducers
 */

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ReduxState } from '.';

export type Thunk = ThunkAction<void, ReduxState, unknown, Action>;
export type Dispatch = ThunkDispatch<ReduxState, unknown, Action>;
export type GetState = () => ReduxState;
