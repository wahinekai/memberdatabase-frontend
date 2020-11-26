import { ValueOf } from './';

export type ActionType<TActions extends { [k: string]: any }> = ReturnType<ValueOf<TActions>>;
