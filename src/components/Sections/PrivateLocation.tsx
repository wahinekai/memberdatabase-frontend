/**
 * @file Defintion of PrivateLocation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField } from '../Forms';
import { PartialUser, PropTypes, userFieldLabels } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PrivateLocation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPrivateLocation>();
    const name = 'streetAddress';

    return (
        <Col>
            <FormField
                disabled={disabled}
                error={errors[name]}
                touched={touched[name]}
                name={name}
                label={userFieldLabels[name]}
            />
        </Col>
    );
};

export default PrivateLocation;
