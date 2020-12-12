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
import { Logo, Logout } from '.';

/**
 * Global navbar for application
 *
 * @returns The Navbar Component
 */
const ApplicationNavbar: FC = () => (
    <Navbar bg="primary" variant="dark" expand="lg">
        <NavbarBrand href="/">
            <Logo />
        </NavbarBrand>
        <NavbarToggle aria-controls="applicationNavbar" />
        <NavbarCollapse id="applicationNavbar">
            <Nav className="mr-auto">
                <NavLink className="h4" href="/search">
                    Search
                </NavLink>
                <NavLink className="h4" href="/profile">
                    Profile
                </NavLink>
            </Nav>
            <Logout />
        </NavbarCollapse>
    </Navbar>
);

export default ApplicationNavbar;
