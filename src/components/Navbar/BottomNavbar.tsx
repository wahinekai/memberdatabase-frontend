/**
 * @file Contains definition for the bottom navbar component
 */

import React, { FC } from 'react';
import { PropTypes } from '../../model';
import NavbarEntry from './NavbarEntry';

/**
 * The bottom navbar component
 *
 * @returns The bottom nabvar
 */
const Navbar: FC = () => {
    const pages: Array<PropTypes.NavbarEntry> = [
        {
            icon: 'search',
            link: '/search',
            name: 'Find other users',
        },
        {
            icon: 'id-badge',
            link: '/profile',
            name: 'Edit your profile',
        },
        {
            icon: 'sign-out-alt',
            link: '/logout',
            name: 'Logout',
        },
    ];

    const pagesList = pages.map(({ link, name, icon }, i) => (
        <NavbarEntry key={i} link={link} name={name} icon={icon} />
    ));

    return (
        <nav className="navbar navbar-expand navbar-primary bg-primary fixed-bottom">
            <ul className="navbar-nav container-fluid">{pagesList}</ul>
        </nav>
    );
};

export default Navbar;
