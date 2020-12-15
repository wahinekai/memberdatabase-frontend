/**
 * @file Definition of input array
 */

import { FieldArray, useField } from 'formik';
import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { Input } from '..';
import { PropTypes } from '../../model';

/**
 * A component that creates an array of inputs
 *
 * @param props - React properties passed down from parents to children
 * @returns A Formik component integrated with bootstrap
 */
const InputArray: FC<PropTypes.Input> = (props) => {
    const [field] = useField<string[]>(props);

    return (
        <FieldArray
            name={props.name}
            render={(arrayHelpers) => {
                const array = field.value.map((value, index) => (
                    <InputGroup key={index}>
                        <Input
                            name={`${field.name}.${index}`}
                            disabled={props.disabled}
                            placeholder={props.placeholder}
                            type={props.type}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary" onClick={() => arrayHelpers.remove(index)}>
                                -
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                ));

                return (
                    <>
                        {array}
                        <Button
                            className="my-2"
                            variant="primary"
                            onClick={() => arrayHelpers.insert(field.value.length, '')}
                            block
                        >
                            Add Another
                        </Button>
                    </>
                );
            }}
        />
    );
};

export default InputArray;
