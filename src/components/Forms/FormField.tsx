/**
 * @file Defitition of Form Field Component
 */

import React, { FC } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';

import { PropTypes } from '../../model';
import { Error } from '..';
import { Help, Input, Label } from '.';

/**
 * A React component group connecting Formik and Bootstrap
 *
 * @param props - React properties passed down from parent
 * @returns A React FormField Component
 */
const FormField: FC<PropTypes.FormField> = (props) => {
    const helpId = props.helpText ? `${props.name}Help` : undefined;
    const help = helpId ? (
        <Help id={helpId} className={props.helpClassName}>
            {props.helpText}
        </Help>
    ) : null;

    const label = props.label ? (
        <Label htmlFor={props.name} className={props.labelClassName}>
            {props.label}
        </Label>
    ) : null;

    const error = props.error && props.touched ? <Error>{props.error}</Error> : null;

    return (
        <FormGroup>
            {label}
            {error}
            <Input
                name={props.name}
                type={props.type}
                className={props.inputClassName}
                placeholder={props.placeholder}
                disabled={props.disabled}
                aria-describedby={helpId}
            />
            {help}
        </FormGroup>
    );
};

export default FormField;
