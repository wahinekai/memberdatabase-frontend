/**
 * @file Defitition of Form Field Component
 */

import React, { FC } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';

import { PropTypes } from '../../model';
import Error from '../Error';
import Help from './Help';
import Input from './Input';
import Label from './Label';

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

    const InputComponent = props.inputComponent ?? Input;

    const error = props.error && props.touched ? <Error>{props.error}</Error> : null;

    return (
        <FormGroup>
            {label}
            {error}
            <InputComponent
                name={props.name}
                type={props.type}
                className={props.inputClassName}
                placeholder={props.placeholder}
                disabled={props.disabled}
                aria-describedby={helpId}
                selectType={props.selectType}
                rows={props.rows}
            />
            {help}
        </FormGroup>
    );
};

export default FormField;
