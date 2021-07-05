/**
 * @file Defintion of Needs Administrator Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, BooleanRadioField } from '../Forms';
import { PartialUser, PropTypes, userFieldLabels } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for this section
 */
const Administrator: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IAdministrator>();
    const name = 'admin';

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[name]}
                    touched={touched[name]}
                    name={name}
                    label={userFieldLabels[name]}
                    inputComponent={BooleanRadioField}
                    helpText="An administrator can view & edit any user"
                />
            </Col>
        </>
    );
};

export default Administrator;
