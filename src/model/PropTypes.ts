/**
 * @file PropTypes for all components and containers
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FormikErrors, FormikTouched } from 'formik';

// PropTypes for components & containers
export type FormLabel = HTMLFor & OptionalClassname;
export type Logo = OptionalClassname;
export type TopNavbar = Username;
export type Header = OptionalClassname;
export type Submit = OptionalClassname;
export type Input = InputAdditions & OptionalClassname & InputBase;
export type FormHelp = FormHelpAdditions & OptionalClassname;
export type FormField = FormFieldAdditions & InputBase;

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

type InputBase = {
    name: string;
    type?: string;
    disabled?: boolean;
    placeholder?: string;
};

type FormFieldAdditions = {
    helpText?: string;
    helpClassName?: string;
    labelClassName?: string;
    label?: string;
    inputClassName?: string;
    error?: string;
    touched?: boolean;
};

type FormHelpAdditions = {
    id: string;
};

type InputAdditions = {
    'aria-describedby'?: string;
};

type OptionalClassname = {
    className?: string;
};

type Username = {
    username: string;
};

type HTMLFor = {
    htmlFor: string;
};
