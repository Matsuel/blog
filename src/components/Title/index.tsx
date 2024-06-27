"use client"

import React from 'react';

import styles from './Title.module.scss';
import { Emoji } from 'emoji-picker-react';
import Capitalize from '@/functions/Capitalize';

interface TitleProps {
    content: string;
    emojiCode: string;
}

const Title = ({
    content,
    emojiCode
}: TitleProps) => {
    return (
        <div className={styles.Wrapper}>
            <h1 className={styles.Title}>
                {Capitalize(content)}
            </h1>
            <Emoji unified={emojiCode} size={70} />
        </div>
    );
};

export default Title;