/**
 * @file Contains the admin tools
 */

import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AdminSidebar from './AdminSidebar';
import UsersGrid from './UsersGrid';

/**
 * The Admin tools component
 *
 * @returns the Register page
 */
const AdminTools: FC = () => (
    <>
        <Container fluid className="mt-2">
            <Row>
                <Col xs={3}>
                    <AdminSidebar />
                </Col>
                <Col xs={9}>
                    <UsersGrid />
                </Col>
            </Row>
        </Container>
    </>
);

export default AdminTools;
