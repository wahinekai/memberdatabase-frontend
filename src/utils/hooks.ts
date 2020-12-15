/**
 * @file Custom React hook utility files
 */

import { useEffect, useRef } from 'react';

/**
 * A Cusom hook to return the previous value of the item
 *
 * @param value The value to hold the previous value of
 * @returns Either undefined (if there was no previous value) or the previous value of the item
 */
export const usePrevious = <T>(value: T): T | undefined => {
    // From https://usehooks.com/usePrevious/
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef<T>();

    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
};
