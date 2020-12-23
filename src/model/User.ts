/**
 * @file types related to users
 */

import { Guid } from 'guid-typescript';
import differenceInYears from 'date-fns/differenceInYears';
import { Type } from 'class-transformer';

import { Ensure } from '../utils';
import {
    Chapter,
    Country,
    EnteredStatus,
    IUser,
    IValidatable,
    IFormikConvertable,
    Level,
    Regions,
    PositionInformation,
} from '.';

/**
 * Model of a user - clone of backend User.cs
 * See backend for detailed documentation
 */
class User implements IUser, IValidatable, IFormikConvertable<IUser> {
    public id?: Guid;
    public admin = false;
    public firstName?: string;
    public lastName?: string;
    public active = true;
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
    public surfSpots: string[] = [];
    public photoUrl?: string;
    public biography?: string;
    public joinedDate?: Date;
    public renewalDate?: Date;
    public terminatedDate?: Date;
    public enteredInFacebookChapter: EnteredStatus = EnteredStatus.NotEntered;
    public enteredInFacebookWki: EnteredStatus = EnteredStatus.NotEntered;
    public needsNewMemberBag = false;
    public wonSurfboard = false;
    public dateSurfboardWon?: Date;
    public postalCode?: number;
    public lifetimeMember = false;
    public socialMediaOptOut = false;
    public timeStamp?: number;

    @Type(() => PositionInformation)
    public positions: PositionInformation[] = [];

    /**
     * Gets the user's age from their birthdate, returns null if birthdate is null
     *
     * @returns The age of the user
     */
    public get age(): number | undefined {
        return this.birthdate ? differenceInYears(new Date(), new Date(this.birthdate)) : undefined;
    }

    /**
     * Ensures this user is in a correct state
     */
    public validate(): void {
        // Undo ready for formik changes
        if (this.chapter === Chapter.Default) {
            delete this.chapter;
        }

        if (this.level === Level.Default) {
            delete this.level;
        }

        if (this.region === Regions.CanadianProvinces.Default || this.region === Regions.USStates.Default) {
            delete this.region;
        }

        if (this.country === Country.Default) {
            delete this.country;
        }

        // Ensure each position is valid
        this.positions.forEach((position) => position.validate());

        // User must have a name
        this.firstName = Ensure.isNotNullOrWhitespace(() => this.firstName);

        // Email is primary key, required, only changed on create
        Ensure.isNotNullOrWhitespace(() => this.email);

        // Every user belongs to a chapter
        this.chapter = Ensure.isNotNull(() => this.chapter);

        // Every user must have a joined date
        this.joinedDate = Ensure.isNotNull(() => this.joinedDate);

        // Validation of renewal/terminated date
        if (this.active) {
            // Active user, must have renewal date or be lifetime member, terminated date is null
            if (!this.lifetimeMember) {
                this.renewalDate = Ensure.isNotNull(() => this.renewalDate);
            }

            delete this.terminatedDate;
        } else {
            // Inactive user, must have terminated date, no renewal date
            this.terminatedDate = Ensure.isNotNull(() => this.terminatedDate);

            delete this.renewalDate;
        }

        // User must be either terminated or have renewal date
        if (this.terminatedDate === null) {
            this.renewalDate = Ensure.isNotNull(() => this.renewalDate);
        }

        // If user has won a surfboard, must hae a date won
        if (this.wonSurfboard) {
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
        this.chapter = this.chapter ?? Chapter.Default;
        this.level = this.level ?? Level.Default;
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
            chapter: Chapter.Default,
            level: Level.Default,
            boards: [],
            surfSpots: [],
            positions: [],
            enteredInFacebookChapter: EnteredStatus.NotEntered,
            enteredInFacebookWki: EnteredStatus.NotEntered,
            wonSurfboard: false,
            admin: false,
            active: true,
            needsNewMemberBag: false,
            lifetimeMember: false,
            socialMediaOptOut: false,
        };
        return newUser;
    }
}

export default User;
