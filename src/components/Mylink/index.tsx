import React, { ReactElement } from 'react'
import styles from './Mylink.module.scss'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';

interface MylinkProps {
    logo: ReactElement;
    link: string;
    label: string;
}

const Mylink = ({
    label,
    link,
    logo
}: MylinkProps) => {
    return (
        <Link className={styles.wrapper} href={link} target='_blank'>
            <div className={styles.logo}>
                {logo}
            </div>
            <h3 className={styles.label}>
                {label}
            </h3>

        </Link>
    )
}

export default Mylink