import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactChild } from 'react';

import { IUser } from './';

// PropTypes for components & containers
export type Authenticated = OptionalUser & Children;
export type Unauthenticated = OptionalUser & Children;
export type Error = Children;
export type FormLabel = HTMLFor & Children;
export type Logo = OptionalClassname;
export type TopNavbar = Username;
export type Header = OptionalClassname & Children;
export type MainRouter = OptionalUser;

export type NavbarEntry = {
    link: string;
    name: string;
    icon: IconProp;
};

export type LoginHeader = {
    text: string;
};

export type Logout = {
    onLogout(): void;
};

export type Submit = OptionalClassname;

// PropTypes that makes these entries up

type OptionalClassname = {
    className?: string;
};

type Username = {
    username: string;
};

type Children = {
    children: ReactChild;
};

type OptionalUser = {
    user: IUser | null;
};

type HTMLFor = {
    htmlFor: string;
};
