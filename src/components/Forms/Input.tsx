/**
 * @file Bootstrap input type
 */

import React, { FC } from 'react';
import { Field } from 'formik';
import FormControl from 'react-bootstrap/FormControl';

import { PropTypes } from '../../model';

/**
 * A component that integrates bootstrap input with Formik
 *
 * @param props - React properties passed down from parents to children
 * @returns A Formik component integrated with bootstrap
 */
const Input: FC<PropTypes.Input> = (props) => (
    <Field
        as={FormControl}
        className={`px-2 ${props.className}`}
        name={props.name}
        type={props.type ?? 'text'}
        placeholder={props.placeholder}
        disabled={props.disabled}
        aria-describedby={props['aria-describedby']}
    />
);

export default Input;
