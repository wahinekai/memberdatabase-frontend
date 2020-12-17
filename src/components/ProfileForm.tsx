/**
 * @file Definition for the edit profile form
 */

import React, { FC, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Form } from 'formik';

import { PropTypes } from '../model';
import { Timer, usePrevious } from '../utils';
import { Submit, Sections } from '.';

/**
 * The Profile Form Component
 *
 * @returns The Profile Form Component
 * @param props - React properties passed from parent to children
 * @param props.submitCount - How many times the form has been submitted
 * @param props.submitting - Is this form submitting?
 * @param props.initialSubmitMessage - The message to show before a form submits
 * @param props.submittingMessage - The message to show during submit of the form
 * @param props.afterSubmitMessage - The message to show for 2 seconds after submit.
 * @param props.create - This user is being created for the first time - So allow changes to readonly fields
 */
const ProfileForm: FC<PropTypes.Form> = ({
    submitCount,
    submitting,
    initialSubmitMessage,
    submittingMessage,
    afterSubmitMessage,
    create = false,
}) => {
    const [submitMessage, setSubmitMessage] = useState(initialSubmitMessage);
    const previousSubmitCount = usePrevious(submitCount);

    // Effect to change the message on the submit button from inital submit message to after submit message for 2 seconds, then change it back
    useEffect(() => {
        // Change count, then return it to original message
        if (previousSubmitCount !== submitCount) {
            setSubmitMessage(afterSubmitMessage);
        }

        // After render, wait 2 seconds, then update back to original message
        return () => {
            Timer.waitSecondsAsync(2).then(() => {
                setSubmitMessage(initialSubmitMessage);
            });
        };
    }, [previousSubmitCount, submitCount, afterSubmitMessage, initialSubmitMessage]);

    // Effect to change message on submit button from inital submit message to submitting message if submitting
    useEffect(() => {
        if (submitting) {
            setSubmitMessage(submittingMessage);
        }
    }, [submitting, submittingMessage]);

    return (
        <Container>
            <Form>
                <Row>
                    <h3>Personal Information</h3>
                </Row>
                <Sections.PublicPersonalInformationWithRows />
                <Row>
                    <Sections.PublicSurfingInformation />
                </Row>
                <Row>
                    <Sections.PrivatePersonalInformation create={create} />
                </Row>
                <Row>
                    <h3>Birthday</h3>
                </Row>
                <Row>
                    <Sections.Birthdate />
                </Row>
                <Row>
                    <h3>Address</h3>
                </Row>
                <Row>
                    <Sections.PrivateLocation />
                </Row>
                <Row>
                    <Sections.PublicLocation />
                </Row>
                <Row>
                    <h3>Surfing Information</h3>
                </Row>
                <Row>
                    <Sections.PrivateSurfingInformation />
                </Row>
                <Row>
                    <h3>Administrative Information</h3>
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
