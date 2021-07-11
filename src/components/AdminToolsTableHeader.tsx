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
 * @returns the component
 */
const AdminToolsTableHeader: FC<PropTypes.AdminToolsTableHeader> = (props) => {
    const headers = props.fields.map((field, key) => (
        <AdminToolsTableHeaderCell
            key={key}
            field={field}
            setSortingInformation={props.setSortingInformation}
            search={props.search}
            removeSearch={props.removeSearch}
            addOrEditFilters={props.addOrEditFilters}
            removeFilters={props.removeFilters}
            addOrEditRanges={props.addOrEditRanges}
            removeRanges={props.removeRanges}
        />
    ));

    headers.push(<th key={-1}>View/Submit</th>);

    return (
        <thead>
            <tr>{headers}</tr>
        </thead>
    );
};

export default AdminToolsTableHeader;
