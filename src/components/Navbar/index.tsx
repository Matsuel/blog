"use client"

import React, { LegacyRef, useState } from 'react';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import Button from '../Button';
import { Links } from '@/datas/Navbar';
import Menu from '@/assets/menu.svg'
import Cross from '@/assets/CloseCross.svg'
import Image from 'next/image';
import useSize from '@/hooks/useSize';
import { useClickAway } from '@uidotdev/usehooks';

const Navbar = () => {

    const windowsize = useSize();
    const [showModal, setShowModal] = useState<boolean>(false);
    const isClient = typeof window === 'object';
    const navClickAway = useClickAway(() => {
        setShowModal(false);
    })


    return (
        <div className={styles.Navbar_container} ref={(isClient && windowsize[0] < 512) ? navClickAway as LegacyRef<HTMLDivElement> : null}>

            <button className={styles.Navbar_Menu} onClick={() => setShowModal(!showModal)}>
                <Image src={showModal ? Cross : Menu} alt='menu' className={styles.Navbar_Image} />
            </button>

            {(isClient && (windowsize[0] > 512 || showModal)) &&
                <>
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
                    </div>
                </>
            }
        </div>
    );
};

export default Navbar;