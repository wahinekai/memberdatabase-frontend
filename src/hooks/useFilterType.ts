/**
 * @file definition of useFilterType hook
 */

import { useState, useCallback } from 'react';
import { IUser } from '../model';

/**
 * A custom React hook which expands on setState to allow for viewing, adding/editing a filter, or removing a filter.
 *
 * @returns Three items. The first is the state of the filter. The second is a function which adds or edits that filter. The third is a function which removes that filter
 */
const useFilterType = <T>(): [
    { field: keyof IUser; value: T }[],
    (field: keyof IUser, value: T) => void,
    (field: keyof IUser) => void
] => {
    const [state, setState] = useState<{ field: keyof IUser; value: T }[]>([]);

    const addOrEditFilter = useCallback<(field: keyof IUser, value: T) => void>(
        (field, value) => {
            const index = state.findIndex((value) => value.field === field);
            if (index === -1) {
                // Not found - must push
                const newState = [...state, { field, value }];
                setState(newState);
            } else {
                // Found - remove and add
                const newState = state.filter((value) => value.field !== field);
                newState.push({ field, value });
                setState(newState);
            }
        },
        [state, setState]
    );

    const removeFilter = useCallback<(field: keyof IUser) => void>(
        (field) => {
            const newState = state.filter((value) => value.field !== field);
            setState(newState);
        },
        [state, setState]
    );

    return [state, addOrEditFilter, removeFilter];
};

export default useFilterType;
