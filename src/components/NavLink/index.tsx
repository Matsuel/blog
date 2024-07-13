import React from 'react';

import styles from './NavLink.module.scss';
import { LinkType } from '@/types/Navbar';
import Link from 'next/link';

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    link: LinkType;
}

const NavLink = ({
    link,
    children,
    ...props
}: NavLinkProps) => {
    return (
        <Link key={link.label} href={link.href} target={link.target ? "_blank" : "_self"} className={styles.Navbar_link} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;
