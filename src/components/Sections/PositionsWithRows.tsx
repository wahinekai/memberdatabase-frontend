/**
 * @file Definition of Position Information file
 */

import React, { FC } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormikContext, FieldArray } from 'formik';

import Error from '../Error';
import TextCenter from '../TextCenter';

import { Select, DatePickerField, Label } from '../Forms';
import { PartialUser, Position, PropTypes } from '../../model';

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

    return (
        <FieldArray
            name="positions"
            render={(arrayHelpers) => {
                const array = positions.map((_value, index) => {
                    const error =
                        errors.positions && touched.positions ? <Error>{errors?.positions[index]}</Error> : null;

                    return (
                        <Row key={index}>
                            {error}
                            <InputGroup className="py-1">
                                <Col>
                                    <Select
                                        name={`positions.${index}.name`}
                                        disabled={disabled}
                                        selectType={Position}
                                    />
                                </Col>
                                <Col>
                                    <DatePickerField
                                        name={`positions.${index}.started`}
                                        disabled={disabled}
                                        br={false}
                                    />
                                </Col>
                                <Col>
                                    <DatePickerField
                                        name={`positions.${index}.ended`}
                                        disabled={disabled}
                                        placeholder="Ending date"
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
                                <Label htmlFor="positions.name">Position Name</Label>
                            </Col>
                            <Col>
                                <Label htmlFor="positions.started">Date Started Position</Label>
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
