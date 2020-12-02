/**
 * @file Utility functions for input sanitization
 */

/**
 * Tests to see whether a string is null or whitespace
 *
 * @param input - The input string to test
 * @returns - The input string, which is now known to be a non-whitespace string
 */
const isNotNullOrWhitespace = (input: () => string | null | undefined): string => {
    const inputString = isNotNull(input);

    if (inputString === '') {
        throw new Error('input is an empty string');
    }

    if (inputString.trim() === '') {
        throw new Error('input is all whitespace');
    }

    return inputString;
};

/**
 * Checks to see if something is null or undefined
 *
 * @param input - The input something (we have no idea what it is)
 * @returns The input object
 */
const isNotNull = <T = never>(input: () => T | null | undefined): T => {
    const inputResult = input();

    if (inputResult === null) {
        throw new Error('input is null');
    }

    if (typeof inputResult === 'undefined') {
        throw new Error('input is undefined');
    }

    return inputResult;
};

/**
 * Checks to see if an array is null or empty
 *
 * @param input - The input array
 * @returns - The array, which in now known to be not null or empty
 */
const isNotNullOrEmpty = <T = never>(input: () => T[] | null | undefined): T[] => {
    const inputArray = isNotNull(input);

    if (!inputArray.length) {
        throw new Error('input is empty');
    }

    return inputArray;
};

export { isNotNull, isNotNullOrEmpty, isNotNullOrWhitespace };
