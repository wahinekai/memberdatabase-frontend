/**
 * @file Defintion of PublicSurfingInformation Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useFormikContext } from 'formik';

import { Select, FormField, InputArray, DatePickerField } from '../Forms';
import { PartialUser, PropTypes, Chapter, Level, userFieldLabels } from '../../model';

/**
 * A section of the edit profile form
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for a section of the form
 */
const PublicSurfingInformationWithRows: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IPublicSurfingInformation>();

    const chapter = 'chapter';
    const level = 'level';
    const boards = 'boards';
    const surfSpots = 'surfSpots';
    const startedSurfing = 'startedSurfing';

    return (
        <>
            <Row>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[chapter]}
                        touched={touched[chapter]}
                        inputComponent={Select}
                        selectType={Chapter}
                        name={chapter}
                        label={userFieldLabels[chapter] + '*'}
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[level]}
                        touched={touched[level]}
                        inputComponent={Select}
                        selectType={Level}
                        name={level}
                        label={userFieldLabels[level]}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.boards ? errors.boards[0] : undefined}
                        touched={touched[boards]}
                        inputComponent={InputArray}
                        name={boards}
                        label={userFieldLabels[boards]}
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors.surfSpots ? errors.surfSpots[0] : undefined}
                        touched={touched[surfSpots]}
                        inputComponent={InputArray}
                        name={surfSpots}
                        label="Where You Normally Surf"
                    />
                </Col>
                <Col>
                    <FormField
                        disabled={disabled}
                        error={errors[startedSurfing]}
                        touched={touched[startedSurfing]}
                        inputComponent={DatePickerField}
                        name={startedSurfing}
                        label={userFieldLabels[startedSurfing]}
                        dateFormat="yyyy"
                        showYearPicker
                    />
                </Col>
            </Row>
        </>
    );
};

export default PublicSurfingInformationWithRows;
