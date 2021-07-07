/**
 * @file Definition of Admin Tools Table Header Component
 */

import React, { FC } from 'react';
import { PropTypes } from '../model';
import AdminToolsTableHeaderCell from './AdminToolsTableHeaderCell';

/**
 * Admin Tools Table Header Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.fields - User Fields to display
 * @param props.setSortingInformation - A function that sets the current sorting information
 * @returns the component
 */
const AdminToolsTableHeader: FC<PropTypes.AdminToolsTableHeader> = ({ fields, setSortingInformation }) => {
    const headers = fields.map((field, key) => (
        <AdminToolsTableHeaderCell key={key} field={field} setSortingInformation={setSortingInformation} />
    ));

    headers.push(<th key={-1}>View/Submit</th>);

    return (
        <thead>
            <tr>{headers}</tr>
        </thead>
    );
};

export default AdminToolsTableHeader;
