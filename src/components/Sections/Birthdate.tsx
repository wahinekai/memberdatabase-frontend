/**
 * @file Definition of the Birthdate section of the form
 */

import React, { FC, useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import { useFormikContext } from 'formik';
import differenceInYears from 'date-fns/differenceInYears';

import { PartialUser, PropTypes, userFieldLabels } from '../../model';
import { DatePickerField, FormField } from '../Forms';
import { InputComponent } from '../../model/PropTypes';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for this section of the form
 */
const Birthdate: FC<PropTypes.Section> = ({ disabled = false }) => {
    const {
        values: { birthdate },
        touched,
        errors,
    } = useFormikContext<PartialUser.IBirthdate>();

    const ageCallback = useCallback(
        () => (birthdate ? differenceInYears(new Date(), new Date(birthdate)) : undefined),
        [birthdate]
    );

    const age = 'age';
    const birthdateName = 'birthdate';

    // eslint-disable-next-line jsdoc/require-jsdoc
    const ageComponent: FC<InputComponent> = () => <FormControl disabled={true} name={age} value={ageCallback()} />;

    const ageField = birthdate ? (
        <Col>
            <FormField
                label="Current Age"
                name={age}
                helpText="Calculated automatically from birthdate"
                inputComponent={ageComponent}
            />
        </Col>
    ) : null;

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors[birthdateName]}
                    touched={touched[birthdateName]}
                    inputComponent={DatePickerField}
                    name={birthdateName}
                    label={userFieldLabels[birthdateName]}
                />
            </Col>
            {ageField}
        </>
    );
};

export default Birthdate;
