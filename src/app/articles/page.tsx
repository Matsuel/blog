"use client"

import React from 'react'
import styles from './Articles.module.scss'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title/Title'
import EmojiTitle from '@/components/Title/EmojiTitle'

const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <EmojiTitle emojiCode="1f4da">
        <Title>
          Articles
        </Title>
      </EmojiTitle>
    </div>
  )
}

export default page