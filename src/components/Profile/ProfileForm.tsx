/**
 * @file Definition for the edit profile form
 */

import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'formik';

import { FormField, Submit } from '..';
import { PropTypes, User } from '../../model';

/**
 * The Profile Form Component
 *
 * @param props - Properties passed down from parents
 * @param props.errors - Formik error information
 * @param props.touched - Formik touched information
 * @returns The Profile Form Component
 */
const ProfileForm: FC<PropTypes.Form<User>> = ({ errors, touched }) => (
    <Container>
        <Form>
            <Row>
                <Col>
                    <FormField
                        error={errors.email}
                        touched={touched.email}
                        name="email"
                        disabled={true}
                        helpText="Email is read-only"
                        label="Email"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.phoneNumber}
                        touched={touched.phoneNumber}
                        name="phoneNumber"
                        label="Phone Number"
                    />
                </Col>
            </Row>

            <Submit>Update Profile</Submit>
        </Form>
    </Container>
);

export default ProfileForm;
