/**
 * @file Utility functions relating to age
 */

/**
 * Gets the user's age from their birthdate, returns null if birthdate is null
 *
 * @param birthdate - The birthdate of the suer to get the age of
 * @returns The age of the user
 */
export const getAge = (birthdate: Date): number | null => {
    if (birthdate === null) {
        return null;
    }

    // Found at https://stackoverflow.com/questions/41792026/how-do-i-calculate-age-from-birth-date-in-angular-2-using-typescript
    const timeDiff = Math.abs(Date.now() - birthdate.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    return age;
};
