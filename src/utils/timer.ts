/**
 * @file Utility methods relating to timers
 */

/**
 * Wait asynchonously for a specified number of milliseconds
 *
 * @param time Number of milliseconds to wait before asynchronous return
 * @returns When time milliseconds have elapsed
 */
const waitMillisecondsAsync = (time: number): Promise<void> =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new Promise<void>((resolve, _reject) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setTimeout((_) => resolve(), time);
    });

export { waitMillisecondsAsync };
