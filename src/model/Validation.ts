/**
 * @file Schemas for form validation
 */

import * as Yup from 'yup';

// Building Blocks
const bool = Yup.bool();
const string = Yup.string();
const date = Yup.date();
const nullableDate = date.nullable();
const stringArray = Yup.array<string>();

// Fields
const admin = bool;
const firstName = string.required('First Name is required');
const lastName = string;
const active = bool;
const facebookName = string;
const payPalName = string;
const email = string.email('Must enter a valid email').required('email is required');
const phoneNumber = string;
const streetAddress = string;
const city = string;
const region = string; // TBD - more validation
const country = string; // TBD - more validation
const occupation = string;
const chapter = string.required('User must belong to a chapter'); // TBD - more validation
const birthdate = nullableDate;
const level = string; // TBD - more validation
const startedSurfing = nullableDate;
const boards = stringArray;
const photoUrl = string;
const biography = string;
const joinedDate = date.required('Every member must have a joined date');
const renewalDate = nullableDate;
const terminatedDate = nullableDate;
const position = string; // TBD - more validation
const dateStartedPosition = nullableDate;
const enteredInFacebookChapter = string; // TBD - more validation
const enteredInFacebookWki = string; // TBD - more validation
const needsNewMemberBag = bool;
const wonSurfboard = bool;
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
