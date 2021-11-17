/**
 * @file Definition of Admin Tools Table Header Boolean FIlter Component
 */

import React, { FC, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultiSelect } from 'react-multi-select-component';
import { PropTypes, Utils } from '../../model';

/**
 * Admin Tools Table Header Boolean Filter Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.onChange - Change function called when the search is changed
 * @returns the component
 */
const TableHeaderFilterBoolean: FC<PropTypes.AdminToolsTableHeaderFilterBoolean> = ({ onChange: onChangeProp }) => {
    const options: Utils.ReactMultiSelectOption<boolean>[] = [
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
    const [values, setValues] = useState<Utils.ReactMultiSelectOption<boolean>[]>([]);

    const onChangeLocal = useCallback(
        (values: Utils.ReactMultiSelectOption<boolean>[]) => {
            setValues(values);
            onChangeProp(values.map((v) => v.value));
        },
        [onChangeProp, setValues]
    );

    const toggleVisible = useCallback(() => setVisible(!visible), [visible, setVisible]);

    const multiselect = visible ? (
        <div style={{ zIndex: 999 }}>
            <MultiSelect
                className="z-index:999"
                value={values}
                options={options}
                labelledBy="Select"
                onChange={onChangeLocal}
            />
        </div>
    ) : null;
    return (
        <>
            <FontAwesomeIcon icon="search" onClick={toggleVisible} />
            {multiselect}
        </>
    );
};

export default TableHeaderFilterBoolean;
