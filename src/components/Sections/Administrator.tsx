/**
 * @file Defintion of Needs Administrator Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, BooleanRadioField } from '..';
import { PartialUser, PropTypes } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for this section
 */
const Administrator: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IAdministrator>();

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.admin}
                    touched={touched.admin}
                    name="admin"
                    label="Is this user an administrator?"
                    inputComponent={BooleanRadioField}
                    helpText="An administrator can view & edit any user"
                />
            </Col>
        </>
    );
};

export default Administrator;
