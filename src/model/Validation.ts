/**
 * @file Schemas for form validation
 */

import * as Yup from 'yup';

// Building Blocks
const bool = Yup.bool().typeError('Must be yes or no');
const string = Yup.string().typeError('This field is required');
const date = Yup.date().typeError('A date is required');
const nullableString = string.nullable();
const nullableDate = date.nullable();
const nullableBool = bool.nullable();
const stringArray = Yup.array<string>();

// Fields
const admin = bool;
const firstName = string.required('First Name is required');
const lastName = nullableString;
const active = bool;
const facebookName = nullableString;
const payPalName = nullableString;
const email = string.email('Must enter a valid email').required('email is required');
const phoneNumber = nullableString;
const streetAddress = nullableString;
const city = nullableString;
const region = nullableString;
const country = nullableString;
const occupation = nullableString;
const chapter = string.required('User must belong to a chapter');
const birthdate = nullableDate;
const level = nullableString;
const startedSurfing = nullableDate;
const boards = stringArray;
const photoUrl = nullableString;
const biography = nullableString;
const joinedDate = date.required('Every member must have a joined date');
const renewalDate = nullableDate;
const terminatedDate = nullableDate;
const position = nullableString;
const dateStartedPosition = nullableDate;
const enteredInFacebookChapter = nullableString;
const enteredInFacebookWki = nullableString;
const needsNewMemberBag = nullableBool;
const wonSurfboard = nullableBool;
const dateSurfboardWon = nullableDate;

export const updateProfileSchema = Yup.object().shape({
    admin,
    firstName,
    lastName,
    active,
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
    position,
    dateStartedPosition,
    enteredInFacebookChapter,
    enteredInFacebookWki,
    needsNewMemberBag,
    wonSurfboard,
    dateSurfboardWon,
});
