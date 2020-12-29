/**
 * @file Submit button component
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { PropTypes } from '../model';

/**
 * Submit button component
 *
 * @param props - Properties passed down from parents
 * @param props.children - Children components in DOM tree
 * @returns Submit button component
 */
const Submit: FC<PropTypes.Submit> = ({ children }) => (
    <>
        {/* Needed so that button doesn't cover anything */}
        <Container fluid>
            <Row>
                <Col>
                    <div className="my-5"> </div>
                </Col>
            </Row>
        </Container>
        <Button variant="secondary" className="py-2 fixed-bottom" type="submit" block>
            {children}
        </Button>
    </>
);

export default Submit;
