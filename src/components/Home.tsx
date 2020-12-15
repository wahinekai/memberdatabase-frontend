/**
 * @file Definition of Home Component
 */

import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import rectangleLogo from '../pics/rectangleLogo.png';
import HomeForm from './HomeForm';

/**
 * Definition of the Home Component
 *
 * @returns A Home Search Screen Similar to Google's
 */
const Home: FC = () => (
    <Container fluid>
        <Row>
            <div className="text-center">
                <Image width="50%" src={rectangleLogo} alt="Wahine Kai Logo" />
            </div>
        </Row>
        <Row>
            <HomeForm />
        </Row>
    </Container>
);

export default Home;
