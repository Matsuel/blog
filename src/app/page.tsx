"use client"

import DefaultLayout from '@/components/DefaultLayout'
import React from 'react'
import styles from './page.module.scss'
import { HomeDatas } from '@/datas/Home'
import Button from '@/components/Button'
import Link from 'next/link'
import Title from '@/components/Title/Title'

const Home = () => {
    return (
        <DefaultLayout title='Matheo' emojiCode="">
            Qui suis-je?
            CV
            Parcours
            Lien vers portfolio

            Lien grafiakrt https://www.youtube.com/watch?v=YNbPMm08jcw

            <div className={styles.presentation}>
                {HomeDatas['paragraphe'].map((paragraphe) => (
                    <p className={styles.paragraphe} key={paragraphe}>
                        {paragraphe}
                    </p>
                ))}
            </div>


            <div className={styles.homeLinks}>
                <Title>
                    Liens
                </Title>

                <div className={styles.homeButtons}>
                    <Link href={HomeDatas.portfolio} target='_blank'>
                        <Button variant='primary'>
                            Portfolio (anglais uniquement)
                        </Button>
                    </Link>
                    <Link href='/CV.pdf' target='_blank'>
                        <Button variant='dark'>
                            CV
                        </Button>
                    </Link>
                    <Link href={HomeDatas.linkedin} target='_blank'>
                        <Button variant='primary'>
                            Linkedin
                        </Button>
                    </Link>
                </div>

                <Link href='/blog'>
                    <Button variant='primary'>
                        Visiter le blog
                    </Button>
                </Link>
            </div>

        </DefaultLayout>
    )
}

export default Home