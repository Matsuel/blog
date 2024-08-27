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

            <div className={styles.presentation}>
                {HomeDatas.paragraphe.map((paragraphe) => (
                    <p className={styles.paragraphe} key={paragraphe}>
                        {paragraphe}
                    </p>
                ))}
            </div>

            <div className={styles.about}>

                <div className={styles.homeLinks}>
                    <Title>
                        Liens
                    </Title>

                    <div className={styles.homeButtons}>
                        <Link href='/CV.pdf' target='_blank'>
                            <Button variant='dark'>
                                CV
                            </Button>
                        </Link>
                        <Link href={HomeDatas.portfolio} target='_blank'>
                            <Button variant='primary'>
                                Portfolio (anglais uniquement)
                            </Button>
                        </Link>
                        <Link href={HomeDatas.linkedin} target='_blank'>
                            <Button variant='primary'>
                                Linkedin
                            </Button>
                        </Link>
                        <Link href='/blog'>
                            <Button variant='primary'>
                                Visiter le blog
                            </Button>
                        </Link>
                    </div>

                </div>

                <div className={styles.parcours}>
                    {HomeDatas.parcours.map((parcours) => (
                        <div className={styles.parcoursRow} key={parcours.name}>
                            <div className={styles.parcoursIcon}>
                                {parcours.icon}
                            </div>
                            <div className={styles.parcoursInfos}>
                                <div className={styles.parcoursInfosContainer}>
                                    <h4 className={styles.parcoursName}>
                                        {parcours.name}
                                    </h4>
                                    <p className={styles.parcoursDates}>
                                        {parcours.dates}
                                    </p>
                                </div>
                                {parcours.city}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Home