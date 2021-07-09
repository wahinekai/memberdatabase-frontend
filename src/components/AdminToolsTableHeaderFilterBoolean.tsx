/**
 * @file Definition of Admin Tools Table Header Boolean FIlter Component
 */

import React, { FC, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MultiSelect from 'react-multi-select-component';
import { Option } from 'react-multi-select-component/dist/lib/interfaces';
import { PropTypes } from '../model';

/**
 * Admin Tools Table Header Boolean Filter Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.onChange - Change function called when the search is changed
 * @returns the component
 */
const AdminToolsTableHeaderFilterBoolean: FC<PropTypes.AdminToolsTableHeaderFilterBoolean> = ({
    onChange: onChangeProp,
}) => {
    const options = [
        {
            label: 'Yes',
            value: true,
        },
        {
            label: 'No',
            value: false,
        },
    ];
    const [visible, setVisible] = useState<boolean>(false);
    const [values, setValues] = useState<Option[]>([]);

    const onChangeLocal = useCallback(
        (values: { label: string; value: boolean }[]) => {
            setValues(values);
            onChangeProp(values.map((v) => v.value));
        },
        [onChangeProp, setValues]
    );

    const toggleVisible = useCallback(() => setVisible(!visible), [visible, setVisible]);

    const multiselect = (
        <div style={{ zIndex: 999 }}>
            <MultiSelect
                className="z-index:999"
                value={values}
                options={options}
                labelledBy="Select"
                onChange={onChangeLocal}
            />
        </div>
    );
    return (
        <>
            <FontAwesomeIcon icon="search" onClick={toggleVisible} />
            {multiselect}
        </>
    );
};

export default AdminToolsTableHeaderFilterBoolean;
