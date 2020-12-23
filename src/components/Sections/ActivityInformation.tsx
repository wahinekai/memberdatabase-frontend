/**
 * @file Section definition for ActivityInformation section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { PartialUser, PropTypes } from '../../model';
import { DatePickerField, FormField, BooleanRadioField } from '..';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for this section of the form
 */
const ActivityInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const {
        values: { active, lifetimeMember },
        touched,
        errors,
    } = useFormikContext<PartialUser.IActivityInformation>();

    const renewalDateField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors.renewalDate}
                touched={touched.renewalDate}
                inputComponent={DatePickerField}
                name="renewalDate"
                label="Renewal Date"
            />
        </Col>
    );

    const lifetimeMemberField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors.lifetimeMember}
                touched={touched.lifetimeMember}
                name="lifetimeMember"
                label="Is this user a lifetime member?"
                inputComponent={BooleanRadioField}
            />
        </Col>
    );

    const terminatedDateField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors.terminatedDate}
                touched={touched.terminatedDate}
                inputComponent={DatePickerField}
                name="terminatedDate"
                label="Terminated Date"
            />
        </Col>
    );

    const activeField = lifetimeMember ? (
        lifetimeMemberField
    ) : (
        <>
            {lifetimeMemberField}
            {renewalDateField}
        </>
    );

    const secondDateField = active ? activeField : terminatedDateField;

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.active}
                    touched={touched.active}
                    name="active"
                    label="Is this user an active user?"
                    inputComponent={BooleanRadioField}
                />
            </Col>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.joinedDate}
                    touched={touched.joinedDate}
                    inputComponent={DatePickerField}
                    name="joinedDate"
                    label="Join Date"
                />
            </Col>
            {secondDateField}
        </>
    );
};

export default ActivityInformation;
