"use client"

import React from 'react'
import styles from './Articles.module.scss'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'

const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title content="Articles" emojiCode="1f4da" />
    </div>
  )
}

export default page