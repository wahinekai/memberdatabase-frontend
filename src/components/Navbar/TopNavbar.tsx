import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { PropTypes } from '../../model';

/**
 * @param root0
 * @param root0.username
 */
const ProfileNavbar: FC<PropTypes.TopNavbar> = ({ username }) => (
    <nav className="navbar navbar-expand container">
        <Link to="/profile" className="row">
            <img
                className="navbar-brand"
                height="50px"
                src="http://visualoop.com/wp-content/themes/visualoop/img/there-is-no-picture-for-this-user2.png"
                alt="User Profile"
            />
            <ul className="navbar-nav">
                <li className="nav-item text-white mx-4 mt-2">
                    <h3>{username}</h3>
                </li>
            </ul>
        </Link>
    </nav>
);

export default ProfileNavbar;
