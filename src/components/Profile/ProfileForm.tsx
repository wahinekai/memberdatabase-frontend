/**
 * @file Definition for the edit profile form
 */

import React, { FC, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Form } from 'formik';

import { Submit, Sections } from '..';
import { PropTypes } from '../../model';
import { Timer } from '../../utils';

/**
 * The Profile Form Component
 *
 * @returns The Profile Form Component
 * @param props - React properties passed from parent to children
 * @param props.submitCount - How many times the form has been submitted
 */
const ProfileForm: FC<PropTypes.Form> = ({ submitCount }) => {
    const initialSubmitMessage = 'Update Profile';
    const afterSubmitMessage = 'Profile updated successfully!';
    const [submitMessage, setSubmitMessage] = useState(submitCount > 0 ? afterSubmitMessage : initialSubmitMessage);

    // Runs on every re-render - which will occur each time submit count changes
    if (submitCount > 0) {
        Timer.waitSecondsAsync(2).then(() => setSubmitMessage(initialSubmitMessage));
    }

    return (
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

                <Submit>{submitMessage}</Submit>
            </Form>
        </Container>
    );
};

export default ProfileForm;
