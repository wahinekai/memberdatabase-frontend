/**
 * @file Definition for interface for a user
 */

import { PartialUser } from '.';

/**
 * Interface for User types
 */
interface IUser
    extends PartialUser.IEnteredInFacebook,
        PartialUser.IPositions,
        PartialUser.IWonSurfboardInformation,
        PartialUser.IAdministrator,
        PartialUser.IActivityInformation,
        PartialUser.IBirthdate,
        PartialUser.IPrivateLocation,
        PartialUser.IPublicLocation,
        PartialUser.IPublicSurfingInformation,
        PartialUser.IPublicPersonalInformation,
        PartialUser.IPrivatePersonalInformation,
        PartialUser.INeedsNewMemberBag,
        PartialUser.IOptOut,
        PartialUser.IId {
    timeStamp?: number;
}

export default IUser;
