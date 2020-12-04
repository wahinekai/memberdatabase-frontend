/**
 * @file PropTypes for all components and containers
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FormikErrors, FormikTouched } from 'formik';
import { ReactNode } from 'react';

import { User } from './';

// PropTypes for components & containers
export type Error = Children;
export type FormLabel = HTMLFor & OptionalChildren;
export type Logo = OptionalClassname;
export type TopNavbar = Username;
export type Header = OptionalClassname & Children;
export type MainRouter = OptionalUser;
export type Profile = OptionalUser & GetUser & UpdateUser;
export type Logout = OnLogout;
export type Submit = OptionalClassname;

export type NavbarEntry = {
    link: string;
    name: string;
    icon: IconProp;
};

export type LoginHeader = {
    text: string;
};

export type Form<T> = {
    errors: FormikErrors<T>;
    touched: FormikTouched<T>;
};

// PropTypes that makes these entries up
type OnLogout = {
    onLogout(): void;
};

type OptionalClassname = {
    className?: string;
};

type Username = {
    username: string;
};

type Children = {
    children: ReactNode;
};

type OptionalChildren = {
    children?: ReactNode;
};

type OptionalUser = {
    user?: User | null;
};

type HTMLFor = {
    htmlFor: string;
};

type GetUser = {
    getUser(): void;
};

type UpdateUser = {
    updateUser(values: User): void;
};
