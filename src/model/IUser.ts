/**
 * @file Definition for interface for a user
 */

import { Guid } from 'guid-typescript';
import { Chapter, Country, EnteredStatus, Level, Position } from '.';

/**
 * Interface for User types
 */
interface IUser {
    readonly id: Guid | null; // Not in forms
    admin: boolean | null;
    firstName: string | null;
    lastName: string | null;
    active: boolean | null;
    facebookName: string | null;
    payPalName: string | null;
    readonly email: string | null;
    phoneNumber: string | null;
    streetAddress: string | null;
    city: string | null;
    region: string | null;
    country: Country | null;
    occupation: string | null;
    chapter: Chapter | null;
    birthdate: Date | null;
    level: Level | null;
    startedSurfing: Date | null;
    boards: string[];
    photoUrl: string | null; // Not doing (for now)
    biography: string | null;
    joinedDate: Date | null;
    renewalDate: Date | null;
    terminatedDate: Date | null;
    position: Position | null;
    dateStartedPosition: Date | null;
    enteredInFacebookChapter: EnteredStatus | null;
    enteredInFacebookWki: EnteredStatus | null;
    needsNewMemberBag: boolean | null;
    wonSurfboard: boolean | null;
    dateSurfboardWon: Date | null;
}

export default IUser;
