/**
 * @file Administrative Sidebar Definition
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { downloadFileAsync, downloadExternalFileAsync, settings } from '../utils';
import { PropTypes } from '../model';
import { TextCenter } from './Style';
import UploadCsvModal from './UploadCsvModal';

/**
 * Administrative Sidebar component
 *
 * @param props - Properties passed from parents to children
 * @param props.requireRefresh - Property to pass down to child
 * @returns Administrative sidebar component
 */
const AdminSidebar: FC<PropTypes.AdminSidebar> = ({ requireRefresh }) => (
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
            <UploadCsvModal requireRefresh={requireRefresh} />
        </Col>
    </>
);

export default AdminSidebar;
