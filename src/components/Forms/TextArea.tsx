/**
 * @file Definition of text area component
 */

import { useField } from 'formik';
import React, { FC } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import { PropTypes } from '../../model';

/**
 * A Text Area Component
 *
 * @param props - Properties passed down from parent to child
 * @returns A Text Area bootstrap component
 */
const TextArea: FC<PropTypes.TextArea> = (props) => {
    const [field] = useField<string>(props);

    return (
        <FormControl
            disabled={props.disabled}
            {...field}
            as="textarea"
            rows={props.rows ?? 3}
            value={field.value ?? ''}
        />
    );
};

export default TextArea;
