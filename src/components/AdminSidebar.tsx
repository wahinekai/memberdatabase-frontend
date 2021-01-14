/**
 * @file Administrative Sidebar Definition
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { downloadFileAsync, downloadExternalFileAsync, settings } from '../utils';
import TextCenter from './TextCenter';

/**
 * Administrative Sidebar component
 *
 * @returns Administrative sidebar component
 */
const AdminSidebar: FC = () => (
    <>
        <Col>
            <TextCenter>
                <h5>Downloads</h5>
            </TextCenter>
        </Col>
        <Col>
            <Button
                block
                variant="outline-primary"
                className="my-1"
                onClick={() => downloadFileAsync('/Users/AllUsers.csv', 'AllUsers.csv')}
            >
                Download users as CSV
            </Button>
            <Button
                block
                variant="outline-primary"
                className="my-1"
                onClick={() => downloadExternalFileAsync(settings.templateCsv, 'UploadTemplate.csv')}
            >
                Download template CSV
            </Button>
        </Col>
        <Col>
            <TextCenter>
                <h5>Uploads</h5>
            </TextCenter>
        </Col>
        <Col>
            <Button block variant="outline-primary" className="my-1" disabled>
                Upload users from CSV (TBC)
            </Button>
        </Col>
    </>
);

export default AdminSidebar;
