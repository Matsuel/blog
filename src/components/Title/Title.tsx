import React, { FC, HTMLAttributes } from 'react'
import styles from './Title.module.scss';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    content: string;
}

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = ({
    children,
    ...props
}) => {
    return (
        <h1 className={styles.Title} {...props}>
            {children}
        </h1>
    )
}

export default Title