"use client"

import React from 'react';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import { LinkType } from '@/types/Navbar';
import Weeks from '../Weeks';
import Button from '../Button';
import { Links } from '@/datas/Navbar';

const Navbar = () => {

    return (
        <div className={styles.Navbar_container}>
            <Link className={styles.Navbar_title} href="/">
                Matheo Lang
            </Link>

            <div className={styles.Navbar_links}>
                {Links.map((link) => (
                    <Link key={link.label} href={link.href} target={link.target ? '_blank' : ''}>
                        <Button key={link.label} variant={link.target ? "dark" : "primary"}>
                            {link.icon}
                            {link.label}
                        </Button>
                    </Link>
                ))}
                <Weeks />
            </div>
        </div>
    );
};

export default Navbar;