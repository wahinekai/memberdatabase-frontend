import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

import { LoginObject, RegisterObject, User } from './';

// PropTypes for components & containers
export type Authenticated = OptionalUser & Children;
export type Unauthenticated = OptionalUser & Children;
export type Error = Children;
export type FormLabel = HTMLFor & OptionalChildren;
export type Logo = OptionalClassname;
export type TopNavbar = Username;
export type Header = OptionalClassname & Children;
export type MainRouter = OptionalUser;
export type Profile = Logout & OptionalUser & GetUser;
export type Login = OnLogin;
export type Register = OnRegister;
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

// PropTypes that makes these entries up
type OnLogout = {
    onLogout(): void;
};

type OnRegister = {
    onRegister(values: RegisterObject): void;
};

type OnLogin = {
    onLogin(values: LoginObject): void;
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
    user: User | null;
};

type HTMLFor = {
    htmlFor: string;
};

type GetUser = {
    getUser(): void;
};
