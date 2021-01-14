/**
 * @file Model definition for a return from uploading users
 */

import { IUser } from '.';

interface IUploadUsers {
    importedUsers: IUser[];
    invalidUsers: IUser[];
    duplicateUsers: IUser[];
}

export default IUploadUsers;
