/**
 * @file Phone number form component
 */

import React, { FC, useCallback } from 'react';
import { useField, useFormikContext } from 'formik';
import PhoneInput from 'react-phone-number-input';

import { PropTypes } from '../../model';

import 'react-phone-number-input/style.css';

/**
 * Phone Number Field Component
 *
 * @param props - Properties passed down from parent to child
 * @returns A Phone number input field
 */
const PhoneNumber: FC<PropTypes.Input> = (props) => {
    const { setFieldValue } = useFormikContext();
    const [{ name, value }] = useField<string>(props);

    const onChange = useCallback((value: string) => setFieldValue(name, value), [name, setFieldValue]);

    return (
        <PhoneInput
            className={`${props.className ?? ''}`}
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={value}
            onChange={onChange}
            defaultCountry="US"
            numberInputProps={{ className: 'px-2 form-control' }}
            countrySelectProps={{ className: 'form-control' }}
        />
    );
};

export default PhoneNumber;
