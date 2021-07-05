/**
 * @file Definition of React Page Chooser Component
 */

import React, { FC, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

import { PropTypes } from '../model';

/**
 * Wrapper on the React page chooser component for ideal styling
 *
 * @param props - React properties passed down from parents to children
 * @param props.onChange - Function to call on change of the component
 * @param props.pageCount - Number of pages to allow for choosing of
 * @returns A Page Chooser Component
 */
const PageChooser: FC<PropTypes.PageChooser> = ({ onChange, pageCount }) => {
    const changeHandler = useCallback(({ selected }: { selected: number }): void => onChange(selected), [onChange]);

    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            previousLabel="<<"
            nextLabel=">>"
            containerClassName="pagination justify-content-center nav mb-3"
            activeClassName="active"
            pageClassName="page-item"
            breakClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            pageLinkClassName="page-link"
            breakLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            onPageChange={changeHandler}
        />
    );
};

export default PageChooser;
