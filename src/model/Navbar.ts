/**
 * @file Model definitions for Navbar style
 */

export type NavbarStyleType = {
    bg: 'light' | 'primary';
    variant: 'light' | 'dark';
    logoutVariant: 'outline-light' | 'outline-primary';
};

const primary: NavbarStyleType = {
    bg: 'primary',
    variant: 'dark',
    logoutVariant: 'outline-light',
};

const light: NavbarStyleType = {
    bg: 'light',
    variant: 'light',
    logoutVariant: 'outline-primary',
};

export const NavbarStyles = {
    primary: primary,
    light: light,
};
