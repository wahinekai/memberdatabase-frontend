/**
 * @file types related to users
 */

import { Guid } from 'guid-typescript';
import { Ensure, getAge } from '../utils';
import { Chapter, Country, EnteredStatus, IUser, IValidatable, Level, Position, Regions } from '.';

/**
 * Model of a user - clone of backend User.cs
 * See backend for detailed documentation
 */
class User implements IUser, IValidatable {
    public id?: Guid;
    public admin?: boolean;
    public firstName?: string;
    public lastName?: string;
    public active?: boolean;
    public facebookName?: string;
    public payPalName?: string;
    public email?: string;
    public phoneNumber?: string;
    public streetAddress?: string;
    public city?: string;
    public region?: string;
    public country?: Country;
    public occupation?: string;
    public chapter?: Chapter;
    public birthdate?: Date;
    public level?: Level;
    public startedSurfing?: Date;
    public boards: string[] = [];
    public photoUrl?: string;
    public biography?: string;
    public joinedDate?: Date;
    public renewalDate?: Date;
    public terminatedDate?: Date;
    public position?: Position;
    public dateStartedPosition?: Date;
    public enteredInFacebookChapter?: EnteredStatus;
    public enteredInFacebookWki?: EnteredStatus;
    public needsNewMemberBag?: boolean;
    public wonSurfboard?: boolean;
    public dateSurfboardWon?: Date;

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
            delete this.position;
        }

        if (this.chapter === Chapter.Default) {
            delete this.chapter;
        }

        if (this.level === Level.Default) {
            delete this.level;
        }

        if (this.enteredInFacebookChapter === EnteredStatus.Default) {
            delete this.enteredInFacebookChapter;
        }

        if (this.enteredInFacebookWki === EnteredStatus.Default) {
            delete this.enteredInFacebookWki;
        }

        if (this.region === Regions.CanadianProvinces.Default || this.region === Regions.USStates.Default) {
            delete this.region;
        }

        if (this.country === Country.Default) {
            delete this.country;
        }

        // User must have a name
        this.firstName = Ensure.isNotNullOrWhitespace(() => this.firstName);

        // Email is primary key, required, only changed on create
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
        if (this.position) {
            this.dateStartedPosition = Ensure.isNotNull(() => this.dateStartedPosition);
        }

        // If user has won a surfboard, must hae a date won
        if (this.wonSurfboard === true) {
            this.dateSurfboardWon = Ensure.isNotNull(() => this.dateSurfboardWon);
        }

        // Country and region validation
        if (this.region) {
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
        this.country = this.country ?? Country.Default;

        // Set up region
        if (this.country === Country.UnitedStates) {
            this.region = this.region ?? Regions.USStates.Default;
        } else if (this.country === Country.Canada) {
            this.region = this.region ?? Regions.CanadianProvinces.Default;
        }

        return this;
    }

    /**
     * Creates a new default user for formik
     *
     * @returns An IUser ready to be user in the forms
     */
    public static createForFormik(): IUser {
        const newUser: IUser = {
            country: Country.Default,
            position: Position.Default,
            chapter: Chapter.Default,
            level: Level.Default,
            boards: [],
            enteredInFacebookChapter: EnteredStatus.Default,
            enteredInFacebookWki: EnteredStatus.Default,
        };
        return newUser;
    }
}

export default User;
