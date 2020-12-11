/**
 * @file PropTypes for all components and containers
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FormikErrors, FormikTouched } from 'formik';
import { ReactNode } from 'react';

// PropTypes for components & containers
export type Error = Children;
export type FormLabel = HTMLFor & OptionalChildren;
export type Logo = OptionalClassname;
export type TopNavbar = Username;
export type Header = OptionalClassname & Children;
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

type HTMLFor = {
    htmlFor: string;
};
