/**
 * @file Definition of Admin Tools Table Header Cell Component
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState, useCallback } from 'react';
import { IUser, PropTypes, userFields } from '../model';
import { userFieldLabels } from '../model/PartialUser';
import AdminToolsTableHeaderFilterBoolean from './AdminToolsTableHeaderFilterBoolean';
import AdminToolsTableHeaderSearch from './AdminToolsTableHeaderSearch';

/**
/**
 * Admin Tools Table Header Cell Component
 *
 * @param props - React properties passed down from parents to children
 * @returns the component
 */
const AdminToolsTableHeaderCell: FC<PropTypes.AdminToolsTableHeaderCell> = (props) => {
    const fieldAsUserProperty = props.field as keyof IUser;

    const [ascending, setSorting] = useState<boolean | null>(null);

    const onClick = useCallback(() => {
        const nextState = ascending == null ? true : ascending ? false : null;

        if (nextState == null) {
            props.setSortingInformation({ field: 'id', ascending: true });
        } else {
            props.setSortingInformation({ field: fieldAsUserProperty, ascending: nextState });
        }

        setSorting(nextState);
    }, [ascending, props, fieldAsUserProperty]);

    const onSearch = useCallback(
        (query: string) => {
            if (query.length === 0) {
                props.removeSearch(fieldAsUserProperty);
            } else {
                props.search(fieldAsUserProperty, query);
            }
        },
        [props, fieldAsUserProperty]
    );

    const onFilterBoolean = useCallback(
        (values: boolean[]) => {
            if (values.length === 0) {
                // Remove filter
                props.removeBooleanFilters(fieldAsUserProperty);
            } else {
                // Filter
                props.addOrEditBooleanFilters(fieldAsUserProperty, values);
            }
        },
        [fieldAsUserProperty, props]
    );

    const sortIcon: IconProp = ascending == null ? 'sort' : ascending ? 'sort-up' : 'sort-down';

    // check if field is sortable
    let sortField = null;

    if (!userFields.unsortableProperties.includes(props.field)) {
        // Field is sortable, add Sortable property
        sortField = <FontAwesomeIcon icon={sortIcon} className="mx-2" onClick={onClick} />;
    }

    // Check if field is searchable
    let searchField = null;

    if (userFields.searchableProperties.includes(props.field)) {
        // Field is searchable, add searchable property
        searchField = <AdminToolsTableHeaderSearch onChange={onSearch} />;
    } else if (userFields.booleanFields.includes(props.field)) {
        // Field is filterable as a boolean
        searchField = <AdminToolsTableHeaderFilterBoolean onChange={onFilterBoolean} />;
    }

    return (
        <th>
            <>
                {userFieldLabels[props.field]}
                {sortField}
                {searchField}
            </>
        </th>
    );
};

export default AdminToolsTableHeaderCell;
