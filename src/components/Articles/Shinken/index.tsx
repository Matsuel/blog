import ArticleLayout from '@/components/ArticleLayout'
import React from 'react'

interface ArticleProps {
    title: string;
}


const ShinkenArticle = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>
            cc
        </ArticleLayout >
    )
}

export default ShinkenArticle