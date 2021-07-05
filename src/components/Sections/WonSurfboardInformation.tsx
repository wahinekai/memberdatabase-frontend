/**
 * @file Section definition for won surfboard section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { PartialUser, PropTypes } from '../../model';
import { DatePickerField, FormField, BooleanRadioField } from '../Forms';

/**
 * A section of the edit profile form containing the information of a user having
 * won a surfboard from Wahine Kai
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for the won surfboard information section of the form
 */
const WonSurfboardInformation: FC<PropTypes.Section> = ({ disabled = false }) => {
    const {
        values: { wonSurfboard },
        touched,
        errors,
    } = useFormikContext<PartialUser.IWonSurfboardInformation>();

    const dateWonFieldName = 'dateSurfboardWon';
    const dateWonField = wonSurfboard ? (
        <Col>
            <FormField
                disabled={disabled}
                error={errors[dateWonFieldName]}
                touched={touched[dateWonFieldName]}
                inputComponent={DatePickerField}
                name={dateWonFieldName}
                label="Date This member Won a Surfboard*"
            />
        </Col>
    ) : null;

    const wonSurfboardFieldName = 'wonSurfboard';

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[wonSurfboardFieldName]}
                    touched={touched[wonSurfboardFieldName]}
                    inputComponent={BooleanRadioField}
                    name={wonSurfboardFieldName}
                    label="Has this member won a surfboard?"
                />
            </Col>
            {dateWonField}
        </>
    );
};

export default WonSurfboardInformation;
