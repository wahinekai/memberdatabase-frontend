/**
 * @file Definition of Admin Tools Table Header Number Range Component
 */

import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PropTypes } from '../../model';

/**
 * Admin Tools Table Header Number Range Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.onChange - Change function called when the search is changed
 * @returns the component
 */
const TableHeaderRangeNumber: FC<PropTypes.AdminToolsTableHeaderRangeNumber> = ({ onChange: onChangeProp }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [[first, second], setState] = useState<[number, number]>([Number.MIN_VALUE, Number.MAX_VALUE]);

    const onChangeLocal = useCallback(
        (event: ChangeEvent<HTMLInputElement>, isFirst: boolean) => {
            const valueString = event.target.value;
            const value =
                valueString.length > 0 ? Number.parseFloat(valueString) : isFirst ? Number.MIN_VALUE : Number.MAX_VALUE;

            // Get new first and second
            const newFirst = isFirst ? value : first;
            const newSecond = !isFirst ? value : second;

            setState([newFirst, newSecond]);
            onChangeProp([newFirst, newSecond]);
        },
        [first, second, setState, onChangeProp]
    );

    const onChangeFirst = useCallback((event: ChangeEvent<HTMLInputElement>) => onChangeLocal(event, true), [
        onChangeLocal,
    ]);

    const onChangeSecond = useCallback((event: ChangeEvent<HTMLInputElement>) => onChangeLocal(event, false), [
        onChangeLocal,
    ]);

    const reset = useCallback(() => {
        setState([Number.MIN_VALUE, Number.MAX_VALUE]);
        onChangeProp([Number.MIN_VALUE, Number.MAX_VALUE]);
    }, [setState, onChangeProp]);

    const toggleVisible = useCallback(() => setVisible(!visible), [visible, setVisible]);

    const firstComponentValue = first == Number.MIN_VALUE ? '' : new String(first).toString();
    const secondComponentValue = second == Number.MAX_VALUE ? '' : new String(second).toString();

    const component = visible ? (
        <Form className="justify-content-center text-center">
            <Row>
                <Col xs={5}>
                    <FormControl
                        onChange={onChangeFirst}
                        placeholder="Minimum"
                        value={firstComponentValue}
                        name="first"
                    />
                </Col>
                <Col xs={2}>-</Col>
                <Col xs={5}>
                    <FormControl
                        onChange={onChangeSecond}
                        placeholder="Maximum"
                        value={secondComponentValue}
                        name="second"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={reset} className="mt-2">
                        Reset
                    </Button>
                </Col>
            </Row>
        </Form>
    ) : null;

    return (
        <>
            <FontAwesomeIcon icon="search" onClick={toggleVisible} />
            {component}
        </>
    );
};

export default TableHeaderRangeNumber;
