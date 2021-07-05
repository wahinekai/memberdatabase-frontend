/**
 * @file Section definition for ActivityInformation section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { MemberStatus, PartialUser, PropTypes, userFieldLabels } from '../../model';
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

    const joinedDate = 'joinedDate';
    const renewalDate = 'renewalDate';
    const terminatedDate = 'terminatedDate';
    const statusFieldName = 'status';

    const joinedDateField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors[joinedDate]}
                touched={touched[joinedDate]}
                inputComponent={DatePickerField}
                name={joinedDate}
                label={userFieldLabels[joinedDate] + '*'}
            />
        </Col>
    );
    const renewalDateField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors[renewalDate]}
                touched={touched[renewalDate]}
                inputComponent={DatePickerField}
                name={renewalDate}
                label={userFieldLabels[renewalDate] + '*'}
            />
        </Col>
    );

    const terminatedDateField = (
        <Col>
            <FormField
                disabled={disabled}
                error={errors[terminatedDate]}
                touched={touched[terminatedDate]}
                inputComponent={DatePickerField}
                name={terminatedDate}
                label={userFieldLabels[terminatedDate] + '*'}
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
                    error={errors[statusFieldName]}
                    touched={touched[statusFieldName]}
                    inputComponent={Select}
                    selectType={MemberStatus}
                    name={statusFieldName}
                    label={userFieldLabels[statusFieldName]}
                />
            </Col>
            {fields}
        </>
    );
};

export default ActivityInformation;
