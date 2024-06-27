"use client"

import React from 'react'
import styles from './Glossary.module.scss'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'

const page = () => {
  return (
    <div className={styles.container}>
        <Navbar />
        <Title content="Glossaire" emojiCode="1f4dd" />
        
    </div>
  )
}

export default page