/**
 * @file Definition for the edit profile form
 */

import React, { FC, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Form } from 'formik';

import { Submit, Sections } from '..';
import { PropTypes } from '../../model';
import { Timer, usePrevious } from '../../utils';

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

    const [submitMessage, setSubmitMessage] = useState(initialSubmitMessage);
    const previousSubmitCount = usePrevious(submitCount);

    // Effect to change the message on the submit button from inital submit message to after submit message for 2 seconds, then change it back
    useEffect(() => {
        // Boolean to determine whether the submit count changed on this render
        const submitCountChanged = previousSubmitCount !== undefined && previousSubmitCount !== submitCount;

        // Change count, then return it to original message
        if (submitCountChanged) {
            setSubmitMessage(afterSubmitMessage);
        }

        // After render, wait 2 seconds, then update back to original message
        return () => {
            Timer.waitSecondsAsync(2).then(() => {
                setSubmitMessage(initialSubmitMessage);
            });
        };
    }, [previousSubmitCount, submitCount]);

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
