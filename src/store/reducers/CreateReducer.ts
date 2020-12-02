/**
 * @file Helper function to create a reducer using a map of functions instead of a switch/case statement
 */
import { Reducer } from 'redux';
import { ReduxState } from '../../model';

type FunctionMap = {
    [key: string]: (state: unknown, payload?: unknown) => void;
};

type CreateReducer<S = ReduxState, fnMap = FunctionMap> = (initialState: S, fnMap: fnMap) => Reducer;

/**
 * Helper function to create a reducer using a map of functions instead of a switch/case statement
 *
 * @param initialState - The initial state of the redux application
 * @param fnMap - A map of the reducer functions and their corresponding actions
 * @returns a root reducer
 */
export const createReducer: CreateReducer = (initialState, fnMap) => (state = initialState, action) => {
    const handler = fnMap[action.type];
    return handler ? handler(state, action.payload) : state;
};
