/**
 * @file Defintion of PrivateSurfingInformation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { DatePickerField, FormField, InputArray } from '..';
import { PartialUser, PropTypes } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PrivateSurfingInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPrivateSurfingInformation>();

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.boards ? errors.boards[0] : undefined}
                    touched={touched.boards}
                    inputComponent={InputArray}
                    name="boards"
                    label="Boards"
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.startedSurfing}
                    touched={touched.startedSurfing}
                    inputComponent={DatePickerField}
                    name="startedSurfing"
                    label="Started Surfing Date"
                />
            </Col>
        </>
    );
};

export default PrivateSurfingInformation;
