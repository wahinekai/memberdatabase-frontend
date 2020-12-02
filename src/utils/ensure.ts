/**
 * @file Utility functions for input sanitization
 */

/**
 * Tests to see whether a string is null or whitespace
 *
 * @param input - The input string to test
 * @returns - The input string, which is now known to be a non-whitespace string
 */
const isNotNullOrWhitespace = (input?: string | null): string => {
    input = isNotNull(input);

    if (input === '') {
        throw new Error('input is an empty string');
    }

    if (input.trim() === '') {
        throw new Error('input is all whitespace');
    }

    return input;
};

/**
 * Checks to see if something is null or undefined
 *
 * @param input - The input something (we have no idea what it is)
 * @returns The input object
 */
const isNotNull = <T = never>(input?: T | null): T => {
    if (input === null) {
        throw new Error('input is null');
    }

    if (typeof input === 'undefined') {
        throw new Error('input is undefined');
    }

    return input;
};

/**
 * Checks to see if an array is null or empty
 *
 * @param input - The input array
 * @returns - The array, which in now known to be not null or empty
 */
const isNotNullOrEmpty = <T = never>(input?: T[] | null): T[] => {
    input = isNotNull(input);

    if (!input.length) {
        throw new Error('input is empty');
    }

    return input;
};

export { isNotNull, isNotNullOrEmpty, isNotNullOrWhitespace };
