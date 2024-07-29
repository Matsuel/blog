import React, { HTMLAttributes } from 'react'
import styles from './ArticleLayout.module.scss'

interface ArticleLayoutProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
}

const ArticleLayout = ({
    children,
    title,
    ...props
}: ArticleLayoutProps) => {
    return (
        <div className={styles.articleLayoutContainer}>
            <h1 className={styles.articleLayoutTitle}>
                {title}
            </h1>
            {children}
        </div>
    )
}

export default ArticleLayout