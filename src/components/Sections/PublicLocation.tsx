/**
 * @file Defintion of PublicLocation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { CountryPickerField, FormField, RegionPickerField } from '../Forms';
import { PartialUser, PropTypes, userFieldLabels } from '../../model';

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

    const region = 'region';
    const postalCode = 'postalCode';
    const city = 'city';
    const countryFieldName = 'country';

    // Show region field only if country is picked
    let regionField = null;

    if (country && country !== '') {
        regionField = (
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[region]}
                    touched={touched[region]}
                    name={region}
                    label={userFieldLabels[region]}
                    inputComponent={RegionPickerField}
                    country={country}
                />
            </Col>
        );
    }

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[city]}
                    touched={touched[city]}
                    name={city}
                    label={userFieldLabels[city]}
                />
            </Col>
            {regionField}
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[postalCode]}
                    touched={touched[postalCode]}
                    name={postalCode}
                    label={userFieldLabels[postalCode]}
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[countryFieldName]}
                    touched={touched[countryFieldName]}
                    name={countryFieldName}
                    label={userFieldLabels[countryFieldName]}
                    inputComponent={CountryPickerField}
                />
            </Col>
        </>
    );
};

export default PublicLocation;
