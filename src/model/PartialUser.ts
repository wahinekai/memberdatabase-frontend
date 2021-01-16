/**
 * @file Definition of all partial user interfaces
 */

import { Guid } from 'guid-typescript';
import { Chapter, Country, EnteredStatus, Level, IPositionInformation, MemberStatus } from '.';

export interface IId {
    id?: Guid; // Not in forms
}

export interface IOptOut {
    socialMediaOptOut: boolean;
}

export interface INeedsNewMemberBag {
    needsNewMemberBag: boolean;
}

export interface IAdministrator {
    admin: boolean;
}

export interface IWonSurfboardInformation {
    wonSurfboard: boolean;
    dateSurfboardWon?: Date;
}

export interface IEnteredInFacebook {
    enteredInFacebookChapter?: EnteredStatus;
    enteredInFacebookWki?: EnteredStatus;
}

export interface IPositions {
    positions: IPositionInformation[];
}

export interface IActivityInformation {
    status: MemberStatus;
    joinedDate?: Date;
    renewalDate?: Date;
    terminatedDate?: Date;
}

export interface IBirthdate {
    birthdate?: Date;
}

export interface IPrivateLocation {
    streetAddress?: string;
}

export interface IPublicLocation {
    city?: string;
    region?: string;
    postalCode?: number;
    country?: Country;
}

export interface IPublicSurfingInformation {
    chapter: Chapter;
    level?: Level;
    startedSurfing?: Date;
    boards?: string[];
    surfSpots?: string[];
}

export interface IPublicPersonalInformation {
    firstName?: string;
    lastName?: string;
    facebookName?: string;
    occupation?: string;
    photoUrl?: string; // Not doing (for now)
    biography?: string;
}

export interface IPrivatePersonalInformation {
    payPalName?: string;
    email?: string;
    phoneNumber?: string;
}

export type UserForCard = IId & {
    firstName?: string;
    lastName?: string;
    photoUrl?: string;
    chapter?: Chapter;
    positions: IPositionInformation[];
};
