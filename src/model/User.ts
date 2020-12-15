/**
 * @file types related to users
 */

import { Guid } from 'guid-typescript';
import { Ensure, getAge } from '../utils';
import { Chapter, Country, EnteredStatus, IUser, IValidatable, Level, Position } from '.';

/**
 * Model of a user - clone of backend User.cs
 * See backend for detailed documentation
 */
class User implements IUser, IValidatable {
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
    public enteredInFacebookChapter: EnteredStatus | null = null;
    public enteredInFacebookWki: EnteredStatus | null = null;
    public needsNewMemberBag: boolean | null = null;
    public wonSurfboard: boolean | null = null;
    public dateSurfboardWon: Date | null = null;

    /**
     * Constructs a user from an IUser.
     * This is a form of a copy constructor, but used mostly for JSON IUsers from
     * an API call.
     *
     * @param userObject User object type to construct this user from
     */
    constructor(userObject: IUser) {
        this.id = userObject.id;
        this.admin = userObject.admin;
        this.firstName = userObject.firstName;
        this.lastName = userObject.lastName;
        this.active = userObject.active;
        this.facebookName = userObject.facebookName;
        this.payPalName = userObject.payPalName;
        this.email = userObject.email;
        this.phoneNumber = userObject.phoneNumber;
        this.streetAddress = userObject.streetAddress;
        this.city = userObject.city;
        this.region = userObject.region;
        this.country = userObject.country;
        this.occupation = userObject.occupation;
        this.chapter = userObject.chapter;
        this.birthdate = userObject.birthdate;
        this.level = userObject.level;
        this.startedSurfing = userObject.startedSurfing;
        this.boards = userObject.boards;
        this.photoUrl = userObject.photoUrl;
        this.biography = userObject.biography;
        this.joinedDate = userObject.joinedDate;
        this.renewalDate = userObject.renewalDate;
        this.terminatedDate = userObject.terminatedDate;
        this.position = userObject.position;
        this.dateStartedPosition = userObject.dateStartedPosition;
        this.enteredInFacebookChapter = userObject.enteredInFacebookChapter;
        this.enteredInFacebookWki = userObject.enteredInFacebookWki;
        this.needsNewMemberBag = userObject.needsNewMemberBag;
        this.wonSurfboard = userObject.wonSurfboard;
        this.dateSurfboardWon = userObject.dateSurfboardWon;
    }

    /**
     * Gets the user's age from their birthdate, returns null if birthdate is null
     *
     * @returns The age of the user
     */
    public getAge = (): number | null => (this.birthdate ? getAge(this.birthdate) : null);

    /**
     * Ensures this user is in a correct state
     */
    public validate(): void {
        // Undo ready for formik changes
        if (this.position === Position.Default) {
            this.position = null;
        }

        if (this.chapter === Chapter.Default) {
            this.chapter = null;
        }

        if (this.level === Level.Default) {
            this.level = null;
        }

        if (this.enteredInFacebookChapter === EnteredStatus.Default) {
            this.enteredInFacebookChapter = null;
        }

        if (this.enteredInFacebookWki === EnteredStatus.Default) {
            this.enteredInFacebookWki = null;
        }

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
        }
    }

    /**
     * Readys the user for Formik
     *
     * @returns An IUser ready to be used in forms
     */
    public readyForFormik(): IUser {
        this.position = this.position ?? Position.Default;
        this.chapter = this.chapter ?? Chapter.Default;
        this.level = this.level ?? Level.Default;
        this.enteredInFacebookChapter = this.enteredInFacebookChapter ?? EnteredStatus.Default;
        this.enteredInFacebookWki = this.enteredInFacebookWki ?? EnteredStatus.Default;

        return this;
    }
}

export default User;
