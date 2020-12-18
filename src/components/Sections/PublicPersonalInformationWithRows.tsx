/**
 * @file Defintion of PublicPersonalInformation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useFormikContext } from 'formik';

import { FormField, TextArea } from '..';
import { PartialUser, PropTypes } from '../../model';
import ProfilePhoto from './ProfilePhotoWithContainer';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PublicPersonalInformationWithRows: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPublicPersonalInformation>();

    return (
        <>
            <Row>
                <Col>
                    <ProfilePhoto name="photoUrl" />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.biography}
                        touched={touched.biography}
                        inputComponent={TextArea}
                        name="biography"
                        label="About"
                        rows={7}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.firstName}
                        touched={touched.firstName}
                        name="firstName"
                        label="First Name"
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.lastName}
                        touched={touched.lastName}
                        name="lastName"
                        label="Last Name"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.facebookName}
                        touched={touched.facebookName}
                        name="facebookName"
                        label="Facebook Name"
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.occupation}
                        touched={touched.occupation}
                        name="occupation"
                        label="Occupation"
                    />
                </Col>
            </Row>
        </>
    );
};

export default PublicPersonalInformationWithRows;
