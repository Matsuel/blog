"use client"

import React from 'react'
import styles from './Glossary.module.scss'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title/Title'
import EmojiTitle from '@/components/Title/EmojiTitle'

const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <EmojiTitle emojiCode="1f4dd">
        <Title>
          Glossaire
        </Title>
      </EmojiTitle>

    </div>
  )
}

export default page