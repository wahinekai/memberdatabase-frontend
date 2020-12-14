/**
 * @file Defintion of PublicSurfingInformation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { Select, FormField } from '..';
import { PartialUser, PropTypes, Chapter, Level } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PublicSurfingInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPublicSurfingInformation>();

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.chapter}
                    touched={touched.chapter}
                    inputComponent={Select}
                    selectType={Chapter}
                    name="chapter"
                    label="Chapter"
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.level}
                    touched={touched.level}
                    inputComponent={Select}
                    selectType={Level}
                    name="level"
                    label="Surfer Level"
                />
            </Col>
        </>
    );
};

export default PublicSurfingInformation;
