/**
 * @file Definition of Search Bar Component
 */

import React, { ChangeEvent, FC, useCallback } from 'react';
import { useField, useFormikContext, Field, FieldInputProps } from 'formik';
import FormControl from 'react-bootstrap/FormControl';

import { PropTypes } from '../../model';

/**
 * Search Component
 *
 * @param props - Properties passed down from parent to child
 * @returns A Search Bar Component
 */
const SearchBar: FC<PropTypes.Input> = (props) => {
    const { setFieldValue } = useFormikContext();
    const [{ name, value }] = useField<string>(props);

    const autoComplete = 'auto-complete';

    console.log(value);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const currentValue = event.target.value;
            setFieldValue(name, currentValue);
        },
        [name, setFieldValue]
    );

    return (
        <Field name={props.name}>
            {({ field }: { field: FieldInputProps<string> }) => (
                <>
                    <div
                        className={`px-2 form-control ${props.className ?? ''}`}
                        placeholder={props.placeholder}
                        {...field}
                    >
                        <input
                            {...field}
                            className="border-0"
                            type="text"
                            placeholder={props.placeholder}
                            onChange={onChange}
                        />
                        <span>{autoComplete}</span>
                    </div>
                </>
            )}
        </Field>
    );

    return (
        <Field
            as={FormControl}
            className={`px-2 ${props.className ?? ''}`}
            name={props.name}
            type="text"
            placeholder={props.placeholder}
            onChange={onChange}
        >
            {props.children}
        </Field>
    );
};

export default SearchBar;
