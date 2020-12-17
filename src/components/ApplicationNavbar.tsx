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

import { authProvider } from '../utils';

/**
 * Global navbar for application
 *
 * @returns The Navbar Component
 */
const ApplicationNavbar: FC = () => (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <NavbarBrand href="/">
            <Image
                src="https://wahinekaidevelopment.blob.core.windows.net/frontend-assets/squareLogo.png"
                alt="Navbar Logo"
                width="35"
                height="35"
            />
        </NavbarBrand>
        <NavbarToggle aria-controls="applicationNavbar" />
        <NavbarCollapse id="applicationNavbar">
            <Nav className="mr-auto">
                <NavLink className="h5 px-3" href="/">
                    Search
                </NavLink>
                <NavLink className="h5 px-3" href="/users/create">
                    Create a New Member
                </NavLink>
                <NavLink className="h5 px-3" href="/search/all">
                    All Members
                </NavLink>
                <NavLink className="h5 px-3" href="/profile">
                    Profile
                </NavLink>
            </Nav>
            <Button variant="outline-light" className="rounded" onClick={authProvider.logout}>
                Logout
            </Button>
        </NavbarCollapse>
    </Navbar>
);

export default ApplicationNavbar;
