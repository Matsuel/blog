import React from 'react'
import styles from './CustomLink.module.scss'
import LinkIcon from '@/assets/link.svg'
import Link from 'next/link'
import Image from 'next/image';

interface CustomLinkProps {
    href: string;
    title: string;
    is_underline?: boolean;
}

const CustomLink = ({
    href,
    title,
    is_underline = false
}: CustomLinkProps) => {
    return (
        <Link
            href={href}
            target='_blank'
            className={styles.CustomLink}
            style={{
                textDecoration: is_underline ? "underline" : ""
            }}
        >
            <Image src={LinkIcon} className={styles.CustomLinkLogo} alt='custom link icon' />
            {title}
        </Link>
    )
}

export default CustomLink