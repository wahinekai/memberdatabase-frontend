/**
 * @file Definition of the Region Picker component
 */

import React, { FC } from 'react';
import { useField, useFormikContext } from 'formik';
import { RegionDropdown } from 'react-country-region-selector';

import { PropTypes } from '../../model';

/**
 * The Formik Integrated Region Picker component
 *
 * @param props - Properties passed down from parents to children
 * @returns The Formik Integrated Region Picker
 */
const RegionPickerField: FC<PropTypes.RegionPickerField> = (props) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <RegionDropdown
            disabled={props.disabled}
            onBlur={field.onBlur}
            name={field.name}
            classes={`form-control ${props.className ?? ''}`}
            country={props.country ?? 'United States'}
            value={field.value}
            onChange={(value: string) => setFieldValue(field.name, value)}
        />
    );
};

export default RegionPickerField;
