/**
 * @file Defintion of PublicLocation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, Select } from '..';
import { Country, PartialUser, PropTypes } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PublicLocation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPublicLocation>();

    return (
        <>
            <Col>
                <FormField disabled={disabled} error={errors.city} touched={touched.city} name="city" label="City" />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.region}
                    touched={touched.region}
                    name="region"
                    label="State or Province"
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.country}
                    touched={touched.country}
                    name="country"
                    label="Country"
                    inputComponent={Select}
                    selectType={Country}
                />
            </Col>
        </>
    );
};

export default PublicLocation;
