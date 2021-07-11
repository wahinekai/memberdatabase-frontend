/**
 * @file Definition of Admin Tools Table Header Search Component
 */

import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from '../../model';

/**
 * Admin Tools Table Header Search Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.onChange - Change function called when the search is changed
 * @returns the component
 */
const TableHeaderSearch: FC<PropTypes.AdminToolsTableHeaderSearch> = ({ onChange: onChangeProp }) => {
    const [visible, setVisible] = useState<boolean>(false);

    const onChangeLocal = useCallback((event: ChangeEvent<HTMLInputElement>) => onChangeProp(event.target.value), [
        onChangeProp,
    ]);

    const toggleVisible = useCallback(() => setVisible(!visible), [visible, setVisible]);

    const searchBar = visible ? <FormControl onChange={onChangeLocal} placeholder="Search" /> : null;
    return (
        <>
            <FontAwesomeIcon icon="search" onClick={toggleVisible} />
            {searchBar}
        </>
    );
};

export default TableHeaderSearch;
