/**
 * @file Definition of form for home screen
 */

import { Form, Formik } from 'formik';
import React, { FC, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import { Input } from './Forms';

/**
 * Form for Home Page
 *
 * @returns The Home Form Component
 */
const HomeForm: FC = () => {
    const history = useHistory();

    const initialValues = {
        search: '',
    };

    const onSubmit = useCallback(({ search }: { search: string }) => history.push(`/search?q=${search}`), [history]);

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Container>
                <Form>
                    <Row>
                        <Input name="search" placeholder="Search for a user..." />
                    </Row>
                    <Row>
                        <Col>
                            <div className="text-right">
                                <Button variant="outline-primary" className="px-4 my-2" type="submit">
                                    Search
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <Button href="/search/all" variant="outline-primary" className="px-3 my-2">
                                All Members
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Formik>
    );
};

export default HomeForm;
