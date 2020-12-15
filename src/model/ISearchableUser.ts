/**
 * @file Definition for interface for a searchable user
 */

import { PartialUser } from '.';

/**
 * Interface for User types
 */
interface ISearchableUser
    extends PartialUser.IPositionInformation,
        PartialUser.IPublicSurfingInformation,
        PartialUser.IPublicPersonalInformation,
        PartialUser.IId {}

export default ISearchableUser;
