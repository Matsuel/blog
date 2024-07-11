"use client"

import React from 'react';

import EmojiTitle from './EmojiTitle';
import Title from './Title';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
    emojiCode?: string;
}

const TitleComponent = ({
    emojiCode,
    children
}: TitleProps) => {
    return (
        <EmojiTitle emojiCode={emojiCode}>
            <Title>
                {children}
            </Title>
        </EmojiTitle>
    );
};

export default TitleComponent;