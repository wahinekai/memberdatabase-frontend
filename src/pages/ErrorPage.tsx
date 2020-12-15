/**
 * @file Contains all the components of the error page, as well as its authentication status
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FallbackProps } from 'react-error-boundary';

import { ApplicationNavbar, Header } from '../components';
import { NavbarStyles } from '../model';

/**
 * Contains the components and authentication status for the error page
 *
 * @param props - Properties passed from parents to children
 * @param props.error - Error Shown
 * @returns the Register page
 */
const ErrorPage: FC<FallbackProps> = ({ error }) => {
    return (
        <>
            <ApplicationNavbar style={NavbarStyles.primary} />
            <Container>
                <Row>
                    <Header>An Error Occured</Header>
                </Row>
                <Row>
                    <div className="text-center">{error.message}</div>
                </Row>
            </Container>
            <Button href="/" variant="primary" className="px-3 my-2">
                Go Home
            </Button>
        </>
    );
};

export default ErrorPage;
