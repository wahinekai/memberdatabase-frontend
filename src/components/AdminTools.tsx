/**
 * @file Contains the admin tools
 */

import React, { FC, useCallback, useState } from 'react';
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
const AdminTools: FC = () => {
    const initialUserFields: string[] = ['photoUrl', 'firstName', 'lastName', 'email', 'chapter'];

    const [needsRefresh, setNeedsRefresh] = useState(false);
    const [userFields, setUserFields] = useState(initialUserFields);

    const requireRefresh = useCallback(() => setNeedsRefresh(true), [setNeedsRefresh]);
    const clearRefresh = useCallback(() => setNeedsRefresh(false), [setNeedsRefresh]);

    return (
        <>
            <Container fluid className="mt-2">
                <Row>
                    <Col xs={3}>
                        <AdminSidebar
                            requireRefresh={requireRefresh}
                            fields={userFields}
                            setUserFields={setUserFields}
                        />
                    </Col>
                    <Col xs={9}>
                        <UsersGrid needsRefresh={needsRefresh} clearRefresh={clearRefresh} fields={userFields} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AdminTools;
