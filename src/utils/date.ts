/**
 * @file Collection of utility functions related to dates
 */

/**
 * Turns a date object to a printable date string
 *
 * @param date Date type to be prettied
 * @returns A pretty date string
 */
export const toDateString = (date: Date): string => `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

/**
 * Checks whether a string is a valid date
 *
 * @param dateString Date in a string format to check to see if it is a date
 * @returns A value indicating whether the string is a date
 */
export const isDate = (dateString: string): boolean => {
    const parsedDate = Date.parse(dateString);

    return !isNaN(parsedDate);
};
