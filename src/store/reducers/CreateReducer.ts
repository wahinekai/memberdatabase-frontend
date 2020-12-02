import { Reducer } from 'redux';
import { ReduxState } from '../../model';

type FunctionMap = {
    [key: string]: (state: any, payload?: any) => void;
};

type CreateReducer<S = ReduxState, fnMap = FunctionMap> = (initialState: S, fnMap: fnMap) => Reducer;

/**
 * @param initialState
 * @param fnMap
 */
export const createReducer: CreateReducer = (initialState, fnMap) => (state = initialState, action) => {
    const handler = fnMap[action.type];
    return handler ? handler(state, action.payload) : state;
};
