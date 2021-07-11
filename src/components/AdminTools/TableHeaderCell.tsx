/**
 * @file Definition of Admin Tools Table Header Cell Component
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState, useCallback } from 'react';
import { IUser, PropTypes, userFields } from '../../model';
import { userFieldLabels } from '../../model/PartialUser';
import TableHeaderRangeNumber from './TableHeaderRangeNumber';
import TableHeaderSearch from './TableHeaderSearch';
import TableHeaderFilterBoolean from './TableHeaderFilterBoolean';
import TableHeaderFilterEnum from './TableHeaderFilterEnum';

/**
/**
 * Admin Tools Table Header Cell Component
 *
 * @param props - React properties passed down from parents to children
 * @returns the component
 */
const TableHeaderCell: FC<PropTypes.AdminToolsTableHeaderCell> = (props) => {
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

    const onFilter = useCallback(
        (values: boolean[] | string[]) => {
            if (values.length === 0) {
                // Remove filter
                props.removeFilters(fieldAsUserProperty);
            } else {
                // Filter
                props.addOrEditFilters(fieldAsUserProperty, values);
            }
        },
        [fieldAsUserProperty, props]
    );

    const onChangeRange = useCallback(
        ([first, second]: [number, number]) => {
            if (first === Number.MIN_VALUE && second === Number.MAX_VALUE) {
                props.removeRanges(fieldAsUserProperty);
            } else {
                props.addOrEditRanges(fieldAsUserProperty, [first, second]);
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
        searchField = <TableHeaderSearch onChange={onSearch} />;
    } else if (userFields.booleanFields.includes(props.field)) {
        // Field is filterable as a boolean
        searchField = <TableHeaderFilterBoolean onChange={onFilter} />;
    } else if (Object.keys(userFields.enumProperties).includes(props.field)) {
        searchField = <TableHeaderFilterEnum onChange={onFilter} enumType={userFields.enumProperties[props.field]} />;
    } else if (userFields.numberFilterableProperties.includes(props.field)) {
        searchField = <TableHeaderRangeNumber onChange={onChangeRange} />;
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

export default TableHeaderCell;
