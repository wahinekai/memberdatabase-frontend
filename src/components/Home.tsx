/**
 * @file Definition of Home Component
 */

import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import rectangleLogo from '../pics/rectangleLogo.png';
import HomeForm from './HomeForm';
import { TextCenter } from '.';

/**
 * Definition of the Home Component
 *
 * @returns A Home Search Screen Similar to Google's
 */
const Home: FC = () => (
    <Container fluid>
        <Row>
            <TextCenter>
                <Image width="50%" src={rectangleLogo} alt="Wahine Kai Logo" />
            </TextCenter>
        </Row>
        <Row>
            <HomeForm />
        </Row>
    </Container>
);

export default Home;
