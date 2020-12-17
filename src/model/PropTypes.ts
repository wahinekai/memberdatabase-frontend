/**
 * @file PropTypes for all components and containers
 */

import { Guid } from 'guid-typescript';

import { PartialUser } from '.';

// PropTypes for components
export type Error = OptionalClassname;
export type FormLabel = HTMLFor & OptionalClassname;
export type Logo = OptionalClassname;
export type Header = OptionalClassname;
export type Submit = OptionalClassname;
export type Input = InputAdditions & OptionalClassname & InputBase;
export type FormHelp = FormHelpAdditions & OptionalClassname;
export type Select = SelectAdditions & InputBase;
export type TextArea = InputBase & TextAreaAdditions;
export type InputComponent = Input & Select & TextArea;
export type FormField = FormFieldAdditions & InputComponent & FormikAdditions;
export type Section = OptionalDisabled & OptionalCreate;
export type Form = SubmitCount & SubmitMessages & OptionalCreate;
export type EditUser = Id;
export type UserCard = SearchableUser;
export type Search = Query;

// Router Param Types
export type EditUserPage = OptionalUserIdString;

type OptionalCreate = {
    create?: boolean;
};

type Query = {
    query: string;
};

type SearchableUser = {
    user: PartialUser.UserForCard;
};

type Id = {
    id: Guid;
};

type OptionalUserIdString = {
    userId?: string;
};

type SubmitCount = {
    submitCount: number;
    submitting: boolean;
};

type SubmitMessages = {
    initialSubmitMessage: string;
    submittingMessage: string;
    afterSubmitMessage: string;
};

type OptionalDisabled = {
    disabled?: boolean;
};

type SelectAdditions = {
    selectType?: Record<string, string>;
};

type TextAreaAdditions = {
    rows?: number;
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
    inputComponent?: React.FC<InputComponent>;
};

type FormikAdditions = {
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

type HTMLFor = {
    htmlFor: string;
};
