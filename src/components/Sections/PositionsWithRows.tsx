/**
 * @file Definition of Position Information file
 */

import React, { FC } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormikContext, FieldArray, FormikErrors, FormikTouched } from 'formik';

import { TextCenter } from '../Style';

import { Select, DatePickerField, Label, FormField } from '../Forms';
import { IPositionInformation, PartialUser, Position, PropTypes } from '../../model';

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
        values: { positions },
        touched,
        errors,
    } = useFormikContext<PartialUser.IPositions>();

    const name = 'positions';

    return (
        <FieldArray
            name={name}
            render={(arrayHelpers) => {
                const array = positions.map((_value, index) => {
                    const error: FormikErrors<IPositionInformation> = errors.positions
                        ? typeof errors.positions == 'string' || typeof errors.positions == 'undefined'
                            ? { name: errors.positions, started: errors.positions, ended: errors.positions }
                            : errors.positions[index]
                            ? typeof errors.positions[index] == 'string'
                                ? {
                                      name: errors.positions[index] as string,
                                      started: errors.positions[index] as string,
                                      ended: errors.positions[index] as string,
                                  }
                                : (errors.positions[index] as FormikErrors<IPositionInformation>)
                            : {}
                        : {};

                    const touch: FormikTouched<IPositionInformation> = {
                        name: touched.positions && touched.positions[index] ? touched.positions[index].name : false,
                        started:
                            touched.positions && touched.positions[index] ? touched.positions[index].started : false,
                        ended: touched.positions && touched.positions[index] ? touched.positions[index].ended : false,
                    };

                    return (
                        <Row key={index}>
                            <InputGroup className="py-1">
                                <Col>
                                    <FormField
                                        disabled={disabled}
                                        name={`positions.${index}.name`}
                                        selectType={Position}
                                        error={error.name}
                                        touched={touch.name}
                                        inputComponent={Select}
                                    />
                                </Col>
                                <Col>
                                    <FormField
                                        name={`positions.${index}.started`}
                                        disabled={disabled}
                                        inputComponent={DatePickerField}
                                        error={error.started}
                                        touched={touch.started}
                                        br={false}
                                        placeholder="Starting date"
                                    />
                                </Col>
                                <Col>
                                    <FormField
                                        name={`positions.${index}.ended`}
                                        disabled={disabled}
                                        placeholder="Ending date"
                                        inputComponent={DatePickerField}
                                        error={error.ended}
                                        touched={touch.ended}
                                        br={false}
                                    />
                                </Col>
                                <Col>
                                    <Button
                                        variant="outline-primary"
                                        className="mx-2"
                                        onClick={() => arrayHelpers.remove(index)}
                                    >
                                        Remove Position
                                    </Button>
                                </Col>
                            </InputGroup>
                        </Row>
                    );
                });

                const labels =
                    positions.length > 0 ? (
                        <Row>
                            <Col>
                                <Label htmlFor="positions.name">Position Name*</Label>
                            </Col>
                            <Col>
                                <Label htmlFor="positions.started">Date Started Position*</Label>
                            </Col>
                            <Col>
                                <Label htmlFor="positions.ended">Date Ended Position</Label>
                            </Col>
                            <Col></Col>
                        </Row>
                    ) : null;

                return (
                    <>
                        {labels}
                        {array}
                        <Row>
                            <Col>
                                <TextCenter>
                                    <Button
                                        className="my-2"
                                        variant="primary"
                                        onClick={() => arrayHelpers.insert(positions.length, '')}
                                    >
                                        Add a Position
                                    </Button>
                                </TextCenter>
                            </Col>
                        </Row>
                    </>
                );
            }}
        />
    );
};

export default PositionInformation;
