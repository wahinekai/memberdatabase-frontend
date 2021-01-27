/**
 * @file Section definition for ActivityInformation section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { MemberStatus, PartialUser, PropTypes } from '../../model';
import { DatePickerField, FormField, Select } from '../Forms';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for this section of the form
 */
const ActivityInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const {
        values: { status },
        touched,
        errors,
    } = useFormikContext<PartialUser.IActivityInformation>();

    const joinedDateField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors.joinedDate}
                touched={touched.joinedDate}
                inputComponent={DatePickerField}
                name="joinedDate"
                label="Joined Date*"
            />
        </Col>
    );
    const renewalDateField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors.renewalDate}
                touched={touched.renewalDate}
                inputComponent={DatePickerField}
                name="renewalDate"
                label="Renewal Date*"
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
                label="Terminated Date*"
            />
        </Col>
    );

    let fields = null;

    switch (status) {
        case MemberStatus.Pending:
            // No other fields
            break;
        case MemberStatus.ActivePaying:
            fields = (
                <>
                    {joinedDateField}
                    {renewalDateField}
                </>
            );
            break;
        case MemberStatus.ActiveNonPaying:
            fields = joinedDateField;
            break;
        case MemberStatus.LifetimeMember:
            fields = joinedDateField;
            break;
        case MemberStatus.Terminated:
            fields = (
                <>
                    {joinedDateField}
                    {terminatedDateField}
                </>
            );
    }

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.status}
                    touched={touched.status}
                    inputComponent={Select}
                    selectType={MemberStatus}
                    name="status"
                    label="Member Status*"
                />
            </Col>
            {fields}
        </>
    );
};

export default ActivityInformation;
