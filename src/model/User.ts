/**
 * @file types related to users
 */

import { Guid } from 'guid-typescript';
import { Ensure } from '../utils';
import { Chapter, Country, IValidatable, Level, Position } from '.';

/**
 * Model of a user - clone of backend User.cs
 * See backend for detailed documentation
 */
class User implements IValidatable {
    public readonly id: Guid | null = null;
    public admin: boolean | null = null;
    public firstName: string | null = null;
    public lastName: string | null = null;
    public active: boolean | null = null;
    public facebookName: string | null = null;
    public payPalName: string | null = null;
    public readonly email: string | null = null;
    public phoneNumber: string | null = null;
    public streetAddress: string | null = null;
    public city: string | null = null;
    public region: string | null = null;
    public country: Country | null = null;
    public occupation: string | null = null;
    public chapter: Chapter | null = null;
    public birthdate: Date | null = null;
    public level: Level | null = null;
    public startedSurfing: Date | null = null;
    public boards: string[] = [];
    public photoUrl: string | null = null;
    public biography: string | null = null;
    public joinedDate: Date | null = null;
    public renewalDate: Date | null = null;
    public terminatedDate: Date | null = null;
    public position: Position | null = null;
    public dateStartedPosition: Date | null = null;
    public enteredInFacebookChapter: Date | null = null;
    public enteredInFacebookWki: Date | null = null;
    public needsNewMemberBag: boolean | null = null;
    public wonSurfboard: boolean | null = null;
    public dateSurfboardWon: Date | null = null;

    /**
     * Gets the user's age from their birthdate, returns null if birthdate is null
     *
     * @returns The age of the user
     */
    public get age(): number | null {
        if (this.birthdate === null) {
            return null;
        }

        // Found at https://stackoverflow.com/questions/41792026/how-do-i-calculate-age-from-birth-date-in-angular-2-using-typescript
        const timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
        const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
        return age;
    }

    /**
     * Ensures this user is in a correct state
     */
    public validate(): void {
        // User must have a name
        this.firstName = Ensure.isNotNullOrWhitespace(() => this.firstName);

        // Email is primary key, required, can't be changed
        Ensure.isNotNullOrWhitespace(() => this.email);

        // Every user belongs to a chapter
        this.chapter = Ensure.isNotNull(() => this.chapter);

        // Every user must have a joined date
        this.joinedDate = Ensure.isNotNull(() => this.joinedDate);

        // User must be either terminated or have renewal date
        if (this.terminatedDate === null) {
            this.renewalDate = Ensure.isNotNull(() => this.renewalDate);
        }

        // If user has a leadership position, they must also have a date started
        if (this.position !== null) {
            this.dateStartedPosition = Ensure.isNotNull(() => this.dateStartedPosition);
        }

        // If user has won a surfboard, must hae a date won
        if (this.wonSurfboard === true) {
            this.dateSurfboardWon = Ensure.isNotNull(() => this.dateSurfboardWon);
        }

        // Country and region validation
        if (this.region !== null) {
            // Country cannot be null
            this.country = Ensure.isNotNull(() => this.country);

            // TBD pending on understanding of provinces package
        }
    }
}

export default User;
