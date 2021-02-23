/**
 * @file Submit button component
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { PropTypes } from '../model';
import { FixedBottom, TextCenter, TextRight } from './Style';

/**
 * Submit button component
 *
 * @param props - Properties passed down from parents
 * @returns Submit button component
 */
const Submit: FC<PropTypes.Submit> = (props) => {
    const onlySubmitButton = (
        <TextCenter>
            <Button variant="primary" className="my-2 px-5" type="submit">
                {props.children}
            </Button>
        </TextCenter>
    );

    const submitAndDelete = (
        <Row>
            <Col>
                <TextRight>
                    <Button variant="secondary" className="my-2 px-5" onClick={props.onDeleteUser}>
                        {props.deleteUserMessage}
                    </Button>
                </TextRight>
            </Col>
            <Col>
                <Button variant="primary" className="my-2 px-5" type="submit">
                    {props.children}
                </Button>
            </Col>
        </Row>
    );

    const submitButton = props.deleteUser === true ? submitAndDelete : onlySubmitButton;

    return (
        <>
            {/* Needed so that button doesn't cover anything */}
            <Container fluid>
                <Row>
                    <Col>
                        <div className="my-5"> </div>
                    </Col>
                </Row>
            </Container>
            <FixedBottom>{submitButton}</FixedBottom>
        </>
    );
};

export default Submit;
