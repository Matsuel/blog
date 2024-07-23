import React from 'react'
import styles from './ArticleHome.module.scss'
import { Article } from '@/types/Article'
import Link from 'next/link'
import Badge from '../Badge'
import { Emoji } from 'emoji-picker-react'

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
    <Link className={styles.articleHome} href={href}>
      <div className={styles.badge}>
        <Badge variant={side as 'default' | 'light' | 'dark' | 'primary' | 'red' | 'green' | 'front' | 'back'} style={{ padding: ".5rem" }}>
          <Emoji unified={emoji} size={15} />
          {side.charAt(0).toUpperCase() + side.slice(1).toLowerCase()}
        </Badge>
      </div>
      <h3 className={styles.name}>
        {title}
      </h3>
      {description && <p className={styles.description}>
        {description}
      </p>}
      <p className={styles.dates}>
        {date}
      </p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>

    </Link>
  )
}

export default ArticleHome