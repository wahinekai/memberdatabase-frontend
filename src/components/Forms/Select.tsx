/**
 * @file Definition of Select Component Based on Enum Type
 */

import React, { FC } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import { useField } from 'formik';

import { PropTypes } from '../../model';
import { Ensure } from '../../utils';

/**
 * A Select Component
 *
 * @param props - Properties passed down from parent to child
 * @returns A Select bootstrap component
 */
const Select: FC<PropTypes.Select> = (props) => {
    const [field] = useField(props);
    const enumType = Ensure.isNotNull(() => props.selectType);
    const keys = Object.keys(enumType);
    const children = keys.map((key, i) => (
        <option value={enumType[key]} key={i}>
            {enumType[key]}
        </option>
    ));

    return (
        <FormControl as="select" {...field}>
            {children}
        </FormControl>
    );
};

export default Select;
