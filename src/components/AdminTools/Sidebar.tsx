/**
 * @file Administrative Sidebar Definition
 */

import React, { FC, useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MultiSelect } from 'react-multi-select-component';
import { downloadFileAsync, downloadExternalFileAsync, settings } from '../../utils';
import { PropTypes, userFieldLabels, Utils } from '../../model';
import { TextCenter } from '../Style';
import UploadCsvModal from '../UploadCsvModal';

/**
 * Administrative Sidebar component
 *
 * @param props - Properties passed from parents to children
 * @param props.requireRefresh - Property to pass down to child
 * @param props.setUserFields - Callback for setting user fields
 * @param props.fields - Current fields
 * @returns Administrative sidebar component
 */
const Sidebar: FC<PropTypes.AdminSidebar> = ({ requireRefresh, setUserFields, fields }) => {
    const arrayToMultiselect = useCallback((array: string[]): Utils.ReactMultiSelectOption<string>[] => {
        return array.map((key) => ({ label: userFieldLabels[key], value: key }));
    }, []);

    const multiselectToArray = useCallback((multiselect: Utils.ReactMultiSelectOption<string>[]): string[] => {
        return multiselect.map((key) => key.value);
    }, []);

    const onChange = useCallback(
        (multiselect: Utils.ReactMultiSelectOption<string>[]) => setUserFields(multiselectToArray(multiselect)),
        [setUserFields, multiselectToArray]
    );

    return (
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
            <Col>
                <TextCenter>
                    <h5>Table Columns</h5>
                </TextCenter>
            </Col>
            <Col>
                <MultiSelect
                    value={arrayToMultiselect(fields)}
                    options={arrayToMultiselect(Object.keys(userFieldLabels))}
                    labelledBy="Select"
                    onChange={onChange}
                />
            </Col>
        </>
    );
};

export default Sidebar;
