/**
 * @file Defintion of Entered in Facebook Section Information
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, Select } from '../Forms';
import { EnteredStatus, PartialUser, PropTypes } from '../../model';

/**
 * A section of the edit profile form containing the information of a user being
 * entered in the facebook chapter
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for the entered in facebook section of the form
 */
const EnteredInFacebook: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IEnteredInFacebook>();

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.enteredInFacebookChapter}
                    touched={touched.enteredInFacebookChapter}
                    inputComponent={Select}
                    selectType={EnteredStatus}
                    name="enteredInFacebookChapter"
                    label="Entered in Local Facebook Chapter?"
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.enteredInFacebookWki}
                    touched={touched.enteredInFacebookWki}
                    inputComponent={Select}
                    selectType={EnteredStatus}
                    name="enteredInFacebookWki"
                    label="Entered in Facebook WKI Chapter?"
                />
            </Col>
        </>
    );
};

export default EnteredInFacebook;
