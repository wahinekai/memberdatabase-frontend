/**
 * @file contains definitions for the Navbar Entry component
 */

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PropTypes } from '../../model';

/**
 * Renders a Navbar entry
 *
 * @param props - Properties passed down from parents to children
 * @param props.link - The page this Navbar entry is pointing to
 * @param props.name - The text to be rendered in this Navbar Entry
 * @param props.icon - The name of the Font Awesome Icon to render for this Navbar entry
 * @returns A navbar entry component
 */
const NavbarEntry: FC<PropTypes.NavbarEntry> = ({ link, name, icon }) => (
    <li className="col-4 nav-item nav-link">
        <Link to={link} className="text-white d-block text-center">
            <FontAwesomeIcon className="d-block mx-auto" icon={icon} size="lg" />
            {name}
        </Link>
    </li>
);

export default NavbarEntry;
