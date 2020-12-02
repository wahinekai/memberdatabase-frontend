/**
 * @file Types related to authentication
 */

export type LoginObject = {
    username: string;
    password: string;
};

export type RegisterObject = {
    username: string;
    email: string;
    phone: string;
    password: string;
};

export const initialLoginObject: LoginObject = {
    username: '',
    password: '',
};
export const initialRegisterObject: RegisterObject = {
    email: '',
    phone: '',
    username: '',
    password: '',
};
