/**
 * @file Definition of all partial user interfaces
 */

import { Guid } from 'guid-typescript';
import { Chapter, EnteredStatus, Level, IPositionInformation, MemberStatus } from '.';

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
    country?: string;
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

type userFieldLabelsType = {
    [key: string]: string;
};

export const userFieldLabels: userFieldLabelsType = {
    firstName: 'First Name',
    lastName: 'Last Name',
    facebookName: 'Facebook Name',
    payPalName: 'PayPal Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
    status: 'Member Status',
    chapter: 'Chapter',
    joinedDate: 'Joined Date',
    renewalDate: 'Renewal Date',
    terminatedDate: 'Terminated Date',
    birthdate: 'Birthday',
    age: 'Age',
    streetAddress: 'Street Address',
    city: 'City',
    region: 'Region',
    postalCode: 'Postal (ZIP) Code',
    country: 'Country',
    level: 'Surfer Level',
    startedSurfing: 'Started Surfing Date',
    boards: 'Surfboards',
    surfSpots: 'Surf Spots', // Not the same in form
    occupation: 'Occupation',
    admin: 'Is this member an administrator?',
    photoUrl: 'Profile Photo', // Not the same in form
    biography: 'About',
    positions: 'Positions',
    enteredInFacebookChapter: 'Entered in Local Facebook Chapter?',
    enteredInFacebookWki: 'Entered in Facebook WKI?',
    wonSurfboard: 'Surfboard Won', // Not the same in form
    dateSurfboardWon: 'Date Surfboard Won', // Not the same in form
    socialMediaOptOut: 'Opt out of social media?',
    needsNewMemberBag: 'Does this member need a new member bag?',
    id: 'User ID',
};

type userFieldsType = {
    allUserFields: string[];
    booleanFields: string[];
    dateFields: string[];
    facebookFields: string[];
    unsortableProperties: string[];
    searchableProperties: string[];
    arrayFields: string[];
    numberFilterableProperties: string[];
    enumProperties: { [key: string]: Record<string, string> };
};

export const userFields: userFieldsType = {
    allUserFields: Object.keys(userFieldLabels),
    booleanFields: ['admin', 'wonSurfboard', 'socialMediaOptOut', 'needsNewMemberBag'],
    dateFields: ['joinedDate', 'renewalDate', 'terminatedDate', 'birthdate', 'dateSurfboardWon', 'startedSurfingDate'],
    arrayFields: ['boards', 'surfSpots'],
    facebookFields: ['enteredInFacebookChapter', 'enteredInFacebookWki'],
    unsortableProperties: ['boards', 'surfSpots', 'positions', 'photoUrl', 'biography', 'id'],
    searchableProperties: [
        'firstName',
        'lastName',
        'facebookName',
        'payPalName',
        'email',
        'phoneNumber',
        'streetAddress',
        'city',
        'region',
        'postalCode',
        'boards',
        'surfSpots',
        'occupation',
    ],
    numberFilterableProperties: ['age'],
    enumProperties: {
        enteredInFacebookChapter: EnteredStatus,
        enteredInFacebookWki: EnteredStatus,
        status: MemberStatus,
        chapter: Chapter,
        level: Level,
    },
};
