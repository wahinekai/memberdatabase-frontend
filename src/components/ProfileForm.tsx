/**
 * @file Definition for the edit profile form
 */

import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'formik';

import { PropTypes } from '../model';

import * as Sections from './Sections';
import Submit from './Submit';
import { TextCenter } from './Style';

/**
 * The Profile Form Component
 *
 * @returns The Profile Form Component
 * @param props - React properties passed from parent to children
 */
const ProfileForm: FC<PropTypes.Form> = (props) => {
    const disabled = props.disabled ?? false;

    return (
        <Container>
            <Form>
                <Sections.PublicPersonalInformationWithRows disabled={disabled} />
                <Row>
                    <Sections.PrivatePersonalInformation disabled={disabled} />
                </Row>
                <Row>
                    <Sections.Birthdate disabled={disabled} />
                </Row>
                <Row>
                    <Col>
                        <TextCenter>
                            <h3>Address</h3>
                        </TextCenter>
                    </Col>
                </Row>
                <Row>
                    <Sections.PrivateLocation disabled={disabled} />
                </Row>
                <Row>
                    <Sections.PublicLocation disabled={disabled} />
                </Row>
                <Row>
                    <Col>
                        <TextCenter>
                            <h3>Surfing Information</h3>
                        </TextCenter>
                    </Col>
                </Row>
                <Sections.PublicSurfingInformationWithRows disabled={disabled} />
                <Row>
                    <Col>
                        <TextCenter>
                            <h3>Position Information</h3>
                        </TextCenter>
                    </Col>
                </Row>
                <Sections.PositionsWithRows disabled={disabled} />
                <Row>
                    <Col>
                        <TextCenter>
                            <h3>Administrative Information</h3>
                        </TextCenter>
                    </Col>
                </Row>
                <Row>
                    <Sections.Adminstrator disabled={disabled} />
                    <Sections.EnteredInFacebook disabled={disabled} />
                </Row>
                <Row>
                    <Sections.ActivityInformation disabled={disabled} />
                </Row>
                <Row>
                    <Sections.NeedsNewMemberBag disabled={disabled} />
                    <Sections.OptOut disabled={disabled} />
                    <Sections.WonSurfboardInformation disabled={disabled} />
                </Row>

                <Submit deleteUser={props.deleteUser} deleteUserComponent={props.deleteUserComponent}>
                    {props.submitMessage}
                </Submit>
            </Form>
        </Container>
    );
};

export default ProfileForm;
