/**
 * @file Definition of Position Information file
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { PartialUser, Position, PropTypes } from '../../model';
import { DatePickerField, FormField, Select } from '..';

/**
 * A section of the edit profile form containing the information of a user having
 * a leadership position with Wahine Kai
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for the position information section of the form
 */
const PositionInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const {
        values: { position },
        touched,
        errors,
    } = useFormikContext<PartialUser.IPositionInformation>();

    const dateStartedField =
        position && position !== Position.NoPosition ? (
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.dateStartedPosition}
                    touched={touched.dateStartedPosition}
                    inputComponent={DatePickerField}
                    name="dateStartedPosition"
                    label="Date this Position was Started"
                />
            </Col>
        ) : null;

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.position}
                    touched={touched.position}
                    inputComponent={Select}
                    selectType={Position}
                    name="position"
                    label="Leadership Position"
                />
            </Col>
            {dateStartedField}
        </>
    );
};

export default PositionInformation;
