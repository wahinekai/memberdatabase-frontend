/**
 * @file Defintion of PublicPersonalInformation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useFormikContext } from 'formik';

import { FormField, TextArea } from '../Forms';
import { PartialUser, PropTypes, userFieldLabels } from '../../model';
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

    const photoUrl = 'photoUrl';
    const biography = 'biography';
    const firstName = 'firstName';
    const lastName = 'lastName';
    const facebookName = 'facebookName';
    const occupation = 'occupation';

    return (
        <>
            <Row>
                <Col>
                    <ProfilePhoto name={photoUrl} disabled={disabled} />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[biography]}
                        touched={touched[biography]}
                        inputComponent={TextArea}
                        name={biography}
                        label={userFieldLabels[biography]}
                        rows={7}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[firstName]}
                        touched={touched[firstName]}
                        name={firstName}
                        label={userFieldLabels[firstName] + '*'}
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[lastName]}
                        touched={touched[lastName]}
                        name={lastName}
                        label={userFieldLabels[lastName]}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[facebookName]}
                        touched={touched[facebookName]}
                        name={facebookName}
                        label={userFieldLabels[facebookName]}
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[occupation]}
                        touched={touched[occupation]}
                        name={occupation}
                        label={userFieldLabels[occupation]}
                    />
                </Col>
            </Row>
        </>
    );
};

export default PublicPersonalInformationWithRows;
