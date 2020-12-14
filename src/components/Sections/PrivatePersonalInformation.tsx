/**
 * @file Defintion of PrivatePersonalInformation Section
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
const PrivatePersonalInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPrivatePersonalInformation>();

    return (
        <>
            <Col>
                <FormField
                    error={errors.email}
                    touched={touched.email}
                    name="email"
                    disabled={true}
                    helpText="You cannot edit your email!"
                    label="Email"
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    name="phoneNumber"
                    label="Phone Number"
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.payPalName}
                    touched={touched.payPalName}
                    name="payPalName"
                    label="PayPal Name"
                />
            </Col>
        </>
    );
};

export default PrivatePersonalInformation;
