import { Emoji } from 'emoji-picker-react';
import React, { FC } from 'react'
import styles from './Title.module.scss';

interface EmojiTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    emojiCode?: string;
}

const EmojiTitle:FC<EmojiTitleProps> = ({
    emojiCode,
    children,
    ...props
}) => {
    return (
        <div className={styles.Wrapper} {...props}>
            {emojiCode && <Emoji unified={emojiCode} size={70} />}
            {children}
        </div>
    )
}

export default EmojiTitle