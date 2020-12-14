/**
 * @file Definition for the edit profile form
 */

import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Form } from 'formik';

import { Submit, Sections } from '..';

/**
 * The Profile Form Component
 *
 * @returns The Profile Form Component
 */
const ProfileForm: FC = () => (
    <Container>
        <Form>
            <Sections.PublicPersonalInformationWithRows />
            <Row>
                <Sections.PrivatePersonalInformation />
            </Row>
            <Row>
                <Sections.Birthdate />
            </Row>
            <Row>
                <Sections.PrivateLocation />
            </Row>
            <Row>
                <Sections.PublicLocation />
            </Row>
            <Row>
                <Sections.PublicSurfingInformation />
            </Row>
            <Row>
                <Sections.PrivateSurfingInformation />
            </Row>
            <Row>
                <Sections.Adminstrator />
                <Sections.PositionInformation />
            </Row>
            <Row>
                <Sections.ActivityInformation />
            </Row>
            <Row>
                <Sections.EnteredInFacebook />
            </Row>
            <Row>
                <Sections.NeedsNewMemberBag />
                <Sections.WonSurfboardInformation />
            </Row>

            <Submit>Update Profile</Submit>
        </Form>
    </Container>
);

export default ProfileForm;
