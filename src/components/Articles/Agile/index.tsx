"use client"

import React from 'react'
import styles from '../Article.module.scss'
import ArticleLayout from '@/components/ArticleLayout'
import { ArticleProps } from '../Shinken'

const Agile = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>
            
        </ArticleLayout>
    )
}

export default Agile