import React from 'react'
import styles from './ArticleHome.module.scss'
import { Article } from '@/types/Article'

const ArticleHome = ({
    date,
    description,
    emoji,
    href,
    side,
    tags,
    title,
    template
}: Article) => {
  return (
    <div>ArticleHome</div>
  )
}

export default ArticleHome