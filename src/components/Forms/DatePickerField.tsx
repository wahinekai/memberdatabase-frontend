/**
 * @file Definition of the Date Picker component
 */

import React, { FC, useCallback } from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import { PropTypes } from '../../model';

import 'react-datepicker/dist/react-datepicker.css';

/**
 * The Formik Integrated Date Picker component
 *
 * @param props - Properties passed down from parents to children
 * @returns The Formik Integrated Date Picker
 */
const DatePickerField: FC<PropTypes.DatePickerField> = (props) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    const dateFormat = props.dateFormat ?? 'MM/dd/yyyy';
    const showYearPicker = props.showYearPicker ?? false;
    const showMonthYearPicker = props.showMonthYearPicker ?? false;
    const selected = field.value ? new Date(field.value) : null;
    const onChange = useCallback((newDate: Date) => setFieldValue(field.name, newDate), [field.name, setFieldValue]);
    const br = props.br === false ? null : <br />;

    return (
        <>
            {br}
            <DatePicker
                selected={selected}
                dateFormat={dateFormat}
                placeholderText={props.placeholder}
                className={`${props.className ?? ''} form-control px-2`}
                onChange={onChange}
                onBlur={field.onBlur}
                name={field.name}
                isClearable
                showYearPicker={showYearPicker}
                showMonthYearPicker={showMonthYearPicker}
            />
        </>
    );
};

export default DatePickerField;
