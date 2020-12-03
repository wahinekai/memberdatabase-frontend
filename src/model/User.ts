/**
 * @file types related to users
 */

export type User = {
    firstName?: string;
    lastName?: string;
    active: boolean;
    email: string;
    facebookName?: string;
    payPalName?: string;
    phoneNumber?: string;
    streetAddress?: string;
    city?: string;
    region?: string;
    country?: string;
};

export type UserWithToken = User & {
    token: string;
};

export const noUser: User = {
    firstName: '',
    email: '',
    active: false,
};
