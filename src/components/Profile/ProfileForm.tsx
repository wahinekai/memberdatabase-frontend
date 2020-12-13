/**
 * @file Definition for the edit profile form
 */

import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'formik';

import { FormField, Submit, DatePickerField, Select, TextArea, BooleanRadioField, InputArray } from '..';
import { PropTypes, IUser, EnteredStatus, Position, Chapter, Level, Country } from '../../model';

/**
 * The Profile Form Component
 *
 * @param props - Properties passed down from parents
 * @param props.errors - Formik error information
 * @param props.touched - Formik touched information
 * @returns The Profile Form Component
 */
const ProfileForm: FC<PropTypes.Form<IUser>> = ({ errors, touched }) => (
    <Container>
        <Form>
            <Row>
                <Col>
                    <FormField
                        error={errors.firstName}
                        touched={touched.firstName}
                        name="firstName"
                        label="First Name"
                    />
                </Col>
                <Col>
                    <FormField error={errors.lastName} touched={touched.lastName} name="lastName" label="Last Name" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.biography}
                        touched={touched.biography}
                        inputComponent={TextArea}
                        name="biography"
                        label="Say Something About Yourself"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.email}
                        touched={touched.email}
                        name="email"
                        disabled={true}
                        helpText="You cannot edit your email!"
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
                <Col>
                    <FormField
                        error={errors.birthdate}
                        touched={touched.birthdate}
                        inputComponent={DatePickerField}
                        name="birthdate"
                        label="Birthday"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.admin}
                        touched={touched.admin}
                        name="admin"
                        label="Is this user an administrator?"
                        inputComponent={BooleanRadioField}
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.active}
                        touched={touched.active}
                        name="active"
                        label="Is this user an active user?"
                        inputComponent={BooleanRadioField}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.streetAddress}
                        touched={touched.streetAddress}
                        name="streetAddress"
                        label="Address"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField error={errors.city} touched={touched.city} name="city" label="City" />
                </Col>
                <Col>
                    <FormField error={errors.region} touched={touched.region} name="region" label="State or Province" />
                </Col>
                <Col>
                    <FormField
                        error={errors.country}
                        touched={touched.country}
                        name="country"
                        label="Country"
                        inputComponent={Select}
                        selectType={Country}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
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
                        error={errors.level}
                        touched={touched.level}
                        inputComponent={Select}
                        selectType={Level}
                        name="level"
                        label="Surfer Level"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.boards ? errors.boards[0] : undefined}
                        touched={touched.boards}
                        inputComponent={InputArray}
                        name="boards"
                        label="Boards"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.position}
                        touched={touched.position}
                        inputComponent={Select}
                        selectType={Position}
                        name="position"
                        label="Leadership Position"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.dateStartedPosition}
                        touched={touched.dateStartedPosition}
                        inputComponent={DatePickerField}
                        name="dateStartedPosition"
                        label="Date you Started this Position"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.facebookName}
                        touched={touched.facebookName}
                        name="facebookName"
                        label="Facebook Name"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.payPalName}
                        touched={touched.payPalName}
                        name="payPalName"
                        label="PayPal Name"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.occupation}
                        touched={touched.occupation}
                        name="occupation"
                        label="Occupation"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.joinedDate}
                        touched={touched.joinedDate}
                        inputComponent={DatePickerField}
                        name="joinedDate"
                        label="Join Date"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.renewalDate}
                        touched={touched.renewalDate}
                        inputComponent={DatePickerField}
                        name="renewalDate"
                        label="Renewal Date"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.terminatedDate}
                        touched={touched.terminatedDate}
                        inputComponent={DatePickerField}
                        name="terminatedDate"
                        label="Terminated Date"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.enteredInFacebookChapter}
                        touched={touched.enteredInFacebookChapter}
                        inputComponent={Select}
                        selectType={EnteredStatus}
                        name="enteredInFacebookChapter"
                        label="Entered in Facebook Chapter?"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.enteredInFacebookWki}
                        touched={touched.enteredInFacebookWki}
                        inputComponent={Select}
                        selectType={EnteredStatus}
                        name="enteredInFacebookWki"
                        label="Entered in Facebook WKI?"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        error={errors.needsNewMemberBag}
                        touched={touched.needsNewMemberBag}
                        inputComponent={BooleanRadioField}
                        name="needsNewMemberBag"
                        label="Does this user need a new member bag?"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.wonSurfboard}
                        touched={touched.wonSurfboard}
                        inputComponent={BooleanRadioField}
                        name="wonSurfboard"
                        label="Has this user won a surfboard?"
                    />
                </Col>
                <Col>
                    <FormField
                        error={errors.dateSurfboardWon}
                        touched={touched.dateSurfboardWon}
                        inputComponent={DatePickerField}
                        name="dateSurfboardWon"
                        label="The Date This User Won a Surfboard"
                        helpText="If this user hasn't won a surfboard, don't worry about this"
                    />
                </Col>
            </Row>

            <Submit>Update Profile</Submit>
        </Form>
    </Container>
);

export default ProfileForm;
