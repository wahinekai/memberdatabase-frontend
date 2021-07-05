/**
 * @file Defintion of PrivatePersonalInformation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, PhoneNumber } from '../Forms';
import { PartialUser, PropTypes, userFieldLabels } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PrivatePersonalInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPrivatePersonalInformation>();
    const email = 'email';
    const phoneNumber = 'phoneNumber';
    const payPalName = 'payPalName';

    return (
        <>
            <Col>
                <FormField
                    error={errors[email]}
                    touched={touched[email]}
                    name={email}
                    disabled={disabled}
                    label={userFieldLabels[email] + '*'}
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[phoneNumber]}
                    touched={touched[phoneNumber]}
                    name={phoneNumber}
                    label={userFieldLabels[phoneNumber]}
                    type="phone"
                    inputComponent={PhoneNumber}
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[payPalName]}
                    touched={touched[payPalName]}
                    name={payPalName}
                    label={userFieldLabels[payPalName]}
                />
            </Col>
        </>
    );
};

export default PrivatePersonalInformation;
