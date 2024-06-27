"use client"

import React, { createRef } from 'react';

import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import { LinkType } from '@/types/Navbar';
import Weeks from '../Weeks';

const Links: LinkType[] = [
    {
        href: '/',
        label: 'Home',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinejoin='round' strokeLinecap='round' d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>,
        target: false
    },
    {
        href: 'https://matsuel.netlify.app',
        label: 'Portfolio',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap='round' strokeLinejoin='round' d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>,
        target: true
    },
    {
        href: 'articles',
        label: 'Articles',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>,
        target: false
    },
    {
        href: 'glossary',
        label: 'Glossary',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap='round' strokeLinejoin='round' d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>,
        target: false
    },
];

const Navbar = () => {
    const navRef = createRef<HTMLDivElement>();

    if (typeof window !== 'undefined') {
        window.onwheel = (e) => {
            if (e.deltaY > 0) {
                if (navRef.current) {
                    navRef.current.style.top = "-100px";
                }
            } else if (e.deltaY < 0) {
                if (navRef.current) {
                    navRef.current.style.top = "0";
                }
            }
        }
    }

    return (
        <div className={styles.Navbar_container} ref={navRef}>
            <Link className={styles.Navbar_title} href="/">
                <Image src={Logo} alt="Logo" />
                Matheo Lang
            </Link>

            <div className={styles.Navbar_links}>
                {Links.map((link) => (
                    <Link key={link.label} href={link.href} target={link.target ? "_blank" : "_self"} className={styles.Navbar_link}>
                        {link.icon}
                        {link.label}
                    </Link>
                ))}
                <Weeks />
            </div>
        </div>
    );
};

export default Navbar;