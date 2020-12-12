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
    const [field] = useField<boolean>(props);

    const changeToFalse = useCallback(() => setFieldValue(field.name, false), [field.name, setFieldValue]);
    const changeToTrue = useCallback(() => setFieldValue(field.name, true), [field.name, setFieldValue]);

    return (
        <>
            <FormCheck type="radio" label="Yes" checked={field.value === true} onChange={changeToTrue} />
            <FormCheck type="radio" label="No" checked={field.value === false} onChange={changeToFalse} />
        </>
    );
};

export default BooleanRadioField;
