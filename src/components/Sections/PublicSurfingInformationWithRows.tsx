/**
 * @file Defintion of PublicSurfingInformation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useFormikContext } from 'formik';

import { Select, FormField, InputArray, DatePickerField } from '../Forms';
import { PartialUser, PropTypes, Chapter, Level } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PublicSurfingInformationWithRows: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPublicSurfingInformation>();

    return (
        <>
            <Row>
                <Col>
                    <FormField
                        disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
                        error={errors.boards ? errors.boards[0] : undefined}
                        touched={touched.boards}
                        inputComponent={InputArray}
                        name="boards"
                        label="Surfboards"
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.surfSpots ? errors.surfSpots[0] : undefined}
                        touched={touched.surfSpots}
                        inputComponent={InputArray}
                        name="surfSpots"
                        label="Where You Normally Surf"
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
            </Row>
        </>
    );
};

export default PublicSurfingInformationWithRows;
