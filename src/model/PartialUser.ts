/**
 * @file Definition of all partial user interfaces
 */

import { Guid } from 'guid-typescript';
import { Chapter, Country, EnteredStatus, Level, Position } from '.';

export interface IId {
    id?: Guid; // Not in forms
}

export interface INeedsNewMemberBag {
    needsNewMemberBag?: boolean;
}

export interface IAdministrator {
    admin?: boolean;
}

export interface IWonSurfboardInformation {
    wonSurfboard?: boolean;
    dateSurfboardWon?: Date;
}

export interface IEnteredInFacebook {
    enteredInFacebookChapter?: EnteredStatus;
    enteredInFacebookWki?: EnteredStatus;
}

export interface IPositionInformation {
    position?: Position;
    dateStartedPosition?: Date;
}

export interface IActivityInformation {
    active?: boolean;
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
    country?: Country;
}

export interface IPrivateSurfingInformation {
    startedSurfing?: Date;
    boards: string[];
}

export interface IPublicSurfingInformation {
    chapter?: Chapter;
    level?: Level;
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
    readonly email?: string;
    phoneNumber?: string;
}

export type UserForCard = IId & {
    firstName?: string;
    lastName?: string;
    photoUrl?: string;
    chapter?: Chapter;
    position?: Position;
};
