/**
 * @file Definition of predicates for use in the application
 */

/**
 * A predicate to test whether a value is null or undefined
 *
 * @param value The value to test
 * @returns Whether the value is not null or undefined
 */
export const notNullOrUndefined = <T>(value: T | null | undefined): value is T => value !== null && value !== undefined;
