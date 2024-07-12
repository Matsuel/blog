"use client"

import React from 'react';

import EmojiTitle from './EmojiTitle';
import Title from './Title';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    emojiCode?: string;
}

const TitleComponent = ({
    emojiCode,
    children,
    ...props
}: TitleProps) => {
    return (
        <EmojiTitle emojiCode={emojiCode}>
            <Title {...props}>
                {children}
            </Title>
        </EmojiTitle>
    );
};

export default TitleComponent;