/**
 * @file types related to users
 */

export type User = {
    firstName: string;
    email: string;
};

export type UserWithToken = User & {
    token: string;
};

export const noUser: User = {
    firstName: '',
    email: '',
};
