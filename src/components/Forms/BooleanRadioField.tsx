/**
 * @file Definition of radio field for boolean inputs
 */

import React, { FC, useCallback } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import { useField, useFormikContext } from 'formik';

import { PropTypes } from '../../model';

/**
 * Boolean Radio Form Field Component
 *
 * @param props - Properties passed down from parent to child
 * @returns Radio buttons for true, false, and null
 */
const BooleanRadioField: FC<PropTypes.Input> = (props) => {
    const { setFieldValue } = useFormikContext();
    const [{ name, value }] = useField<boolean>(props);

    const toggleSwitch = useCallback(() => setFieldValue(name, !value), [name, value, setFieldValue]);

    return (
        <>
            <FormCheck
                disabled={props.disabled}
                id={`${name}-switch`}
                type="switch"
                label={value ? 'Yes' : 'No'}
                checked={value}
                onChange={toggleSwitch}
            />
        </>
    );
};

export default BooleanRadioField;
