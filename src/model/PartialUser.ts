/**
 * @file Definition of all partial user interfaces
 */

import { Chapter, Country, EnteredStatus, Level, Position } from '.';

export interface INeedsNewMemberBag {
    needsNewMemberBag: boolean | null;
}

export interface IAdministrator {
    admin: boolean | null;
}

export interface IWonSurfboardInformation {
    wonSurfboard: boolean | null;
    dateSurfboardWon: Date | null;
}

export interface IEnteredInFacebook {
    enteredInFacebookChapter: EnteredStatus | null;
    enteredInFacebookWki: EnteredStatus | null;
}

export interface IPositionInformation {
    position: Position | null;
    dateStartedPosition: Date | null;
}

export interface IActivityInformation {
    active: boolean | null;
    joinedDate: Date | null;
    renewalDate: Date | null;
    terminatedDate: Date | null;
}

export interface IBirthdate {
    birthdate: Date | null;
}

export interface IPrivateLocation {
    streetAddress: string | null;
}

export interface IPublicLocation {
    city: string | null;
    region: string | null;
    country: Country | null;
}

export interface IPrivateSurfingInformation {
    startedSurfing: Date | null;
    boards: string[];
}

export interface IPublicSurfingInformation {
    chapter: Chapter | null;
    level: Level | null;
}

export interface IPublicPersonalInformation {
    firstName: string | null;
    lastName: string | null;
    facebookName: string | null;
    occupation: string | null;
    photoUrl: string | null; // Not doing (for now)
    biography: string | null;
}

export interface IPrivatePersonalInformation {
    payPalName: string | null;
    readonly email: string | null;
    phoneNumber: string | null;
}
