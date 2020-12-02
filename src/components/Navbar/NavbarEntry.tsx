import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PropTypes } from '../../model';

/**
 * @param root0
 * @param root0.link
 * @param root0.name
 * @param root0.icon
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
