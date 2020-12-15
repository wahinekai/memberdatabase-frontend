/**
 * @file Definition of Navbar
 */

import React, { FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import squareLogo from '../pics/squareLogo.png';
import { authProvider } from '../utils';
import { PropTypes } from '../model';

/**
 * Global navbar for application
 *
 * @param props - Properties passed down from parents to children
 * @param props.style - The style for this component
 * @returns The Navbar Component
 */
const ApplicationNavbar: FC<PropTypes.Navbar> = ({ style }) => (
    <Navbar bg={style.bg} variant={style.variant} expand="lg" sticky="top">
        <NavbarBrand href="/">
            <Image src={squareLogo} alt="Navbar Logo" width="40" height="40" />
        </NavbarBrand>
        <NavbarToggle aria-controls="applicationNavbar" />
        <NavbarCollapse id="applicationNavbar">
            <Nav className="mr-auto">
                <NavLink className="h4" href="/">
                    Search
                </NavLink>
                <NavLink className="h4" href="/profile">
                    Profile
                </NavLink>
                <NavLink className="h4" href="/search/all">
                    All Members
                </NavLink>
            </Nav>
            <Button variant={style.logoutVariant} className="rounded" onClick={authProvider.logout}>
                Logout
            </Button>
        </NavbarCollapse>
    </Navbar>
);

export default ApplicationNavbar;
