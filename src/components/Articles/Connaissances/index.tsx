"use client"

import React from 'react'
import styles from '../Article.module.scss'
import { ArticleProps } from '../Shinken'
import ArticleLayout from '@/components/ArticleLayout'

const Connaissances = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>

        </ArticleLayout>
    )
}

export default Connaissances