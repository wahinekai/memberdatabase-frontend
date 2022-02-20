/**
 * @file Schemas for form validation
 */

import * as Yup from 'yup';
import { Chapter, EnteredStatus, MemberStatus, Position } from '.';

/**
 * A function that converts an enum into a Regex, omitting the default value
 *
 * @param enumType Type of enum to convert to a Regex
 * @returns A regex that can be tested to determine if an object matches that Regex
 */
const enumToRegexNoDefault = (enumType: Record<string, string>): RegExp => {
    const keys = Object.keys(enumType);

    const filteredKeys = keys.filter((key) => key !== 'Default');
    const mappedKeys = filteredKeys.map((key) => enumType[key]);
    const mappedKeysString = mappedKeys.join('|');

    return new RegExp(`(${mappedKeysString})`);
};

// Building Blocks
const bool = Yup.bool().typeError('Must be yes or no');
const string = Yup.string().typeError('This field is required');
const date = Yup.date().typeError('A date is required');
const optionalString = string.optional();
const optionalDate = date.optional();
const optionalBool = bool.optional();
const stringArray = Yup.array().of(string);

const position = Yup.object().shape({
    name: string
        .required('Position Name is required')
        .matches(enumToRegexNoDefault(Position), 'Must have a leadership position'),
    started: date.required('Start date is required'),
    ended: optionalDate,
});

const positionArray = Yup.array().of(position);

// Fields
const admin = bool;
const firstName = string.required('First Name is required');
const lastName = optionalString;
const facebookName = optionalString;
const payPalName = optionalString;
const occupation = optionalString;
const email = string.email('Must enter a valid email').required('email is required');
const phoneNumber = optionalString;
const streetAddress = optionalString;
const city = optionalString;
const birthdate = optionalDate;
const level = optionalString;
const startedSurfing = optionalDate;
const boards = stringArray;
const photoUrl = optionalString;
const biography = optionalString;
const needsNewMemberBag = optionalBool;
const wonSurfboard = optionalBool;
const postalCode = optionalString;
const enteredInFacebookChapter = optionalString.matches(enumToRegexNoDefault(EnteredStatus), 'Must have a status');
const enteredInFacebookWki = optionalString.matches(enumToRegexNoDefault(EnteredStatus), 'Must make a selection');
const region = optionalString;
const country = optionalString;
const positions = positionArray;

const status = string
    .required('User must have a status')
    .matches(enumToRegexNoDefault(MemberStatus), 'Must not be default selection');

const chapter = string
    .required('User must belong to a chapter')
    .matches(enumToRegexNoDefault(Chapter), 'Must be a valid chapter');

const dateSurfboardWon = date.when('wonSurfboard', {
    is: true,
    then: date.required('Must have a surfboard won date'),
    otherwise: optionalDate,
});

// Joined date required in all cases except for pending
const joinedDate = date.when('status', {
    // eslint-disable-next-line jsdoc/require-jsdoc
    is: (status: MemberStatus) => status != MemberStatus.Pending,
    then: date.required('Member must have a joined date'),
    otherwise: optionalDate,
});

// Renewal date only required in Active: Paying
const renewalDate = date.when('status', {
    is: MemberStatus.ActivePaying,
    then: date.required('Member must have a renewal date'),
    otherwise: optionalDate,
});

// Terminated date only requried in Terminated
const terminatedDate = date.when('status', {
    is: MemberStatus.Terminated,
    then: date.required('Member must have a terminated date'),
    otherwise: optionalDate,
});

export const updateProfileSchema = Yup.object().shape({
    admin,
    firstName,
    lastName,
    status,
    facebookName,
    payPalName,
    email,
    phoneNumber,
    streetAddress,
    city,
    region,
    country,
    occupation,
    chapter,
    birthdate,
    level,
    startedSurfing,
    boards,
    photoUrl,
    biography,
    joinedDate,
    renewalDate,
    terminatedDate,
    enteredInFacebookChapter,
    enteredInFacebookWki,
    needsNewMemberBag,
    wonSurfboard,
    dateSurfboardWon,
    postalCode,
    positions,
});
