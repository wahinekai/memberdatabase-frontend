/**
 * @file PropTypes for all components and containers
 */

import { Guid } from 'guid-typescript';
import React from 'react';

import { PartialUser, IUser } from '.';

// PropTypes for components
export type Error = OptionalClassname;
export type FormLabel = HTMLFor & OptionalClassname;
export type Logo = OptionalClassname;
export type Header = OptionalClassname;
export type Submit = OptionalClassname & DeleteUser;
export type Input = InputAdditions & OptionalClassname & InputBase;
export type DatePickerField = InputBase & DatePickerAdditions & OptionalClassname;
export type FormHelp = FormHelpAdditions & OptionalClassname;
export type Select = SelectAdditions & InputBase;
export type TextArea = InputBase & TextAreaAdditions;
export type InputComponent = Input & Select & TextArea & DatePickerField;
export type FormField = FormFieldAdditions & InputComponent & FormikAdditions;
export type Section = OptionalDisabled;
export type Form = SubmitMessage & OptionalDisabled & DeleteUser;
export type EditUser = Id;
export type UserCard = SearchableUser;
export type AdminUserRow = AdminUser;
export type Search = Query;
export type ProfilePhoto = Name & OptionalError & OptionalTouched & OptionalDisabled;
export type UsersGrid = RefreshConsumer;
export type AdminSidebar = RefreshProducer;
export type UploadCsvModal = RefreshProducer;
export type DeleteUserModal = Id;

// Router Param Types
export type EditUserPage = OptionalUserIdString;

type DeleteUser = {
    deleteUser?: boolean;
    deleteUserComponent?: React.ReactNode;
};

type SubmitMessage = {
    submitMessage: string;
};

type RefreshProducer = {
    requireRefresh: () => void;
};

type RefreshConsumer = {
    clearRefresh: () => void;
    needsRefresh: boolean;
};

type OptionalError = {
    error?: string;
};

type OptionalTouched = {
    touched?: boolean;
};

type Name = {
    name: string;
};

type DatePickerAdditions = {
    br?: boolean;
    dateFormat?: string;
    showYearPicker?: boolean;
    showMonthYearPicker?: boolean;
};

type Query = {
    query: string;
};

type SearchableUser = {
    user: PartialUser.UserForCard;
};

type AdminUser = {
    user: IUser;
};

type Id = {
    id: Guid;
};

type OptionalUserIdString = {
    userId?: string;
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
