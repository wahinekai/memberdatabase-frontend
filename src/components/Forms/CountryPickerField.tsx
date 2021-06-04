/**
 * @file Definition of the Country Picker component
 */

import React, { FC } from 'react';
import { useField, useFormikContext } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';

import { PropTypes } from '../../model';

/**
 * The Formik Integrated Country Picker component
 *
 * @param props - Properties passed down from parents to children
 * @returns The Formik Integrated Country Picker
 */
const CountryPickerField: FC<PropTypes.CountryPickerField> = (props) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <CountryDropdown
            disabled={props.disabled}
            onBlur={field.onBlur}
            name={field.name}
            classes={`form-control ${props.className ?? ''}`}
            value={field.value}
            onChange={(value: string) => setFieldValue(field.name, value)}
        />
    );
};

export default CountryPickerField;
