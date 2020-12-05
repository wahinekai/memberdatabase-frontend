/**
 * @file types related to users
 */

export type User = {
    firstName?: string | null;
    lastName?: string | null;
    active: boolean;
    email: string;
    facebookName?: string | null;
    payPalName?: string | null;
    phoneNumber?: string | null;
    streetAddress?: string | null;
    city?: string | null;
    region?: string | null;
    country?: string | null;
};

export type UserWithToken = User & {
    token: string;
};

export const noUser: User = {
    firstName: '',
    email: '',
    active: false,
};
