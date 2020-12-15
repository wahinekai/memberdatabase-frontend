/**
 * @file Definition of the Birthdate section of the form
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import { useFormikContext } from 'formik';

import { PartialUser, PropTypes } from '../../model';
import { DatePickerField, FormField } from '..';
import { getAge } from '../../utils';
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

    const age = birthdate ? getAge(new Date(birthdate))?.toString() : undefined;

    // eslint-disable-next-line jsdoc/require-jsdoc
    const ageComponent: FC<InputComponent> = () => <FormControl disabled={true} name="age" value={age} />;

    const ageField = birthdate ? (
        <Col>
            <FormField
                label="Current Age"
                name="age"
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
                    error={errors.birthdate}
                    touched={touched.birthdate}
                    inputComponent={DatePickerField}
                    name="birthdate"
                    label="Birthday"
                />
            </Col>
            {ageField}
        </>
    );
};

export default Birthdate;
