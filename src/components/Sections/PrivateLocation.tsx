/**
 * @file Defintion of PrivateLocation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField } from '..';
import { PartialUser, PropTypes } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PrivateLocation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPrivateLocation>();

    return (
        <Col>
            <FormField
                disabled={disabled}
                error={errors.streetAddress}
                touched={touched.streetAddress}
                name="streetAddress"
                label="Street Address"
            />
        </Col>
    );
};

export default PrivateLocation;
