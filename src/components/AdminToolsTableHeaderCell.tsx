/**
 * @file Definition of Admin Tools Table Header Cell Component
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState, useCallback } from 'react';
import { IUser, PropTypes, userFields } from '../model';
import { userFieldLabels } from '../model/PartialUser';

/**
 * Admin Tools Table Header Cell Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.field - User Field for this cell
 * @param props.setSortingInformation - A function that sets the current sorting information
 * @returns the component
 */
const AdminToolsTableHeaderCell: FC<PropTypes.AdminToolsTableHeaderCell> = ({ field, setSortingInformation }) => {
    const fieldAsUserProperty = field as keyof IUser;

    const [ascending, setSorting] = useState<boolean | null>(null);

    const onClick = useCallback(() => {
        const nextState = ascending == null ? true : ascending ? false : null;

        if (nextState == null) {
            setSortingInformation({ field: 'id', ascending: true });
        } else {
            setSortingInformation({ field: fieldAsUserProperty, ascending: nextState });
        }

        setSorting(nextState);
    }, [ascending, setSorting, setSortingInformation, fieldAsUserProperty]);

    const sortIcon: IconProp = ascending == null ? 'sort' : ascending ? 'sort-up' : 'sort-down';

    // check if field is sortable
    let sortField = null;

    if (!userFields.unsortableProperties.includes(field)) {
        // Field is sortable, add Sortable property
        sortField = <FontAwesomeIcon icon={sortIcon} className="mx-2" onClick={onClick} />;
    }

    return (
        <th>
            <>
                {userFieldLabels[field]}
                {sortField}
            </>
        </th>
    );
};

export default AdminToolsTableHeaderCell;
