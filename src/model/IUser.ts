/**
 * @file Definition for interface for a user
 */

import { Guid } from 'guid-typescript';
import { PartialUser } from '.';

/**
 * Interface for User types
 */
interface IUser
    extends PartialUser.IEnteredInFacebook,
        PartialUser.IPositionInformation,
        PartialUser.IWonSurfboardInformation,
        PartialUser.IAdministrator,
        PartialUser.IActivityInformation,
        PartialUser.IBirthdate,
        PartialUser.IPrivateLocation,
        PartialUser.IPublicLocation,
        PartialUser.IPrivateSurfingInformation,
        PartialUser.IPublicSurfingInformation,
        PartialUser.IPublicPersonalInformation,
        PartialUser.IPrivatePersonalInformation,
        PartialUser.INeedsNewMemberBag {
    readonly id: Guid | null; // Not in forms
}

export default IUser;
