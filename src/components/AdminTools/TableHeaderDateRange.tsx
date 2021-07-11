/**
 * @file Definition of Admin Tools Table Header Number Range Component
 */

import React, { FC, useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
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
const TableHeaderDateRange: FC<PropTypes.AdminToolsTableHeaderRange> = ({ onChange: onChangeProp }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [[first, second], setState] = useState<[number, number]>([Number.MIN_VALUE, Number.MAX_VALUE]);

    const onChangeLocal = useCallback(
        (date: Date | null, isFirst: boolean) => {
            const value = date === null ? (isFirst ? Number.MIN_VALUE : Number.MAX_VALUE) : date.valueOf();

            // Get new first and second
            const newFirst = isFirst ? value : first;
            const newSecond = !isFirst ? value : second;

            setState([newFirst, newSecond]);
            onChangeProp([newFirst, newSecond]);
        },
        [first, second, setState, onChangeProp]
    );

    const onChangeFirst = useCallback((date: Date | null) => onChangeLocal(date, true), [onChangeLocal]);
    const onChangeSecond = useCallback((date: Date | null) => onChangeLocal(date, false), [onChangeLocal]);

    const reset = useCallback(() => {
        setState([Number.MIN_VALUE, Number.MAX_VALUE]);
        onChangeProp([Number.MIN_VALUE, Number.MAX_VALUE]);
    }, [setState, onChangeProp]);

    const toggleVisible = useCallback(() => setVisible(!visible), [visible, setVisible]);

    const firstComponentValue = first == Number.MIN_VALUE ? null : new Date(first);
    const secondComponentValue = second == Number.MAX_VALUE ? null : new Date(second);

    const component = visible ? (
        <Form className="justify-content-center text-center">
            <Row>
                <Col xs={5}>
                    <DatePicker
                        onChange={onChangeFirst}
                        selected={firstComponentValue}
                        selectsStart
                        startDate={firstComponentValue}
                        endDate={secondComponentValue}
                        isClearable
                        name="first"
                        dateFormat="MM/dd/yyyy"
                        className="form-control"
                    />
                </Col>
                <Col xs={2}>-</Col>
                <Col xs={5}>
                    <DatePicker
                        onChange={onChangeSecond}
                        selected={secondComponentValue}
                        selectsEnd
                        startDate={firstComponentValue}
                        endDate={secondComponentValue}
                        isClearable
                        name="second"
                        dateFormat="MM/dd/yyyy"
                        className="form-control"
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

export default TableHeaderDateRange;
