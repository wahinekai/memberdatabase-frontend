/**
 * @file Definition of Admin Tools Table Header Component
 */

import React, { FC } from 'react';
import { PropTypes } from '../model';
import { userFieldLabels } from '../model/PartialUser';

/**
 * Admin Tools Table Header Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.fields - User Fields to display
 * @returns the component
 */
const AdminToolsTableHeader: FC<PropTypes.AdminToolsTableHeader> = ({ fields }) => {
    const headers = fields.map((field, key) => <th key={key}>{userFieldLabels[field]}</th>);

    headers.push(<th key={-1}>View/Submit</th>);

    return (
        <thead>
            <tr>{headers}</tr>
        </thead>
    );
};

export default AdminToolsTableHeader;
