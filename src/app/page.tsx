"use client"

import DefaultLayout from '@/components/DefaultLayout'
import React from 'react'
import styles from './Page.module.scss'
import { HomeDatas } from '@/datas/Home'

const Home = () => {
    return (
        <DefaultLayout title='Matheo' emojiCode="1f3e1">
            Qui suis-je?
            CV
            Parcours
            Lien vers portfolio

            Lien grafiakrt https://www.youtube.com/watch?v=YNbPMm08jcw


            <div className={styles.presentation}>
                {HomeDatas['paragraphe'].map((paragraphe)=>(
                    <p className={styles.paragraphe}>
                        {paragraphe}
                    </p>
                ))}
            </div>






        </DefaultLayout>
    )
}

export default Home