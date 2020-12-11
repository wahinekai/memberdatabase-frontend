/**
 * @file Definition for interface for a user
 */

import { Guid } from 'guid-typescript';
import { Chapter, Country, Level, Position } from '.';

/**
 * Interface for User types
 */
interface IUser {
    readonly id: Guid | null;
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
    photoUrl: string | null;
    biography: string | null;
    joinedDate: Date | null;
    renewalDate: Date | null;
    terminatedDate: Date | null;
    position: Position | null;
    dateStartedPosition: Date | null;
    enteredInFacebookChapter: Date | null;
    enteredInFacebookWki: Date | null;
    needsNewMemberBag: boolean | null;
    wonSurfboard: boolean | null;
    dateSurfboardWon: Date | null;
}

export default IUser;
