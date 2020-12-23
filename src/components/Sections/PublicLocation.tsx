/**
 * @file Defintion of PublicLocation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, Select } from '..';
import { Country, PartialUser, PropTypes, Regions } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PublicLocation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const {
        values: { country },
        touched,
        errors,
    } = useFormikContext<PartialUser.IPublicLocation>();

    // Show region field only if country is picked
    let regionField = null;

    if (country && country !== Country.Default) {
        const selectType = country === Country.UnitedStates ? Regions.USStates : Regions.CanadianProvinces;
        const label = country === Country.UnitedStates ? 'State or Territory' : 'Province or Territory';

        regionField = (
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.region}
                    touched={touched.region}
                    name="region"
                    label={label}
                    inputComponent={Select}
                    selectType={selectType}
                />
            </Col>
        );
    }

    return (
        <>
            <Col>
                <FormField disabled={disabled} error={errors.city} touched={touched.city} name="city" label="City" />
            </Col>
            {regionField}
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.postalCode}
                    touched={touched.postalCode}
                    name="postalCode"
                    label="Postal (ZIP) Code"
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
