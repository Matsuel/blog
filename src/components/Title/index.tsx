"use client"

import React from 'react';

import EmojiTitle from './EmojiTitle';
import Title from './Title';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    emojiCode?: string;
}

const TitleComponent: React.FC<TitleProps> = ({
    content,
    emojiCode,
    ...props
}) => {
    return (
        //split ça en 2 composants 1 avec la div et l'emoji et l'autre avec le title en prenant props en arg pour pouvoir l'utiliser comme un vraiment composant
        // <div className={styles.Wrapper}>

        //     {emojiCode && <Emoji unified={emojiCode} size={70} />}
        // </div>
        <EmojiTitle emojiCode={emojiCode}>
            <Title>
                {content}
            </Title>
        </EmojiTitle>
    );
};

export default TitleComponent;