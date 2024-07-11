"use client"

import React from 'react';

import styles from './Title.module.scss';
import { Emoji } from 'emoji-picker-react';
import Capitalize from '@/functions/Capitalize';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    emojiCode?: string;
}

const Title: React.FC<TitleProps> = ({
    content,
    emojiCode,
    ...props
}) => {
    return (
        //split ça en 2 composants 1 avec la div et l'emoji et l'autre avec le title en prenant props en arg pour pouvoir l'utiliser comme un vraiment composant
        <div className={styles.Wrapper}>
            <h1 className={styles.Title} {...props}>
                {Capitalize(content)}
            </h1>
            {emojiCode && <Emoji unified={emojiCode} size={70} />}
        </div>
    );
};

export default Title;