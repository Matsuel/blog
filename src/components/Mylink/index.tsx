import React from 'react'
import styles from './Mylink.module.scss'
import Link from 'next/link';
import { MylinkProps } from '@/types/Mylink';

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