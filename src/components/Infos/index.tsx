import React from 'react'
import styles from './Infos.module.scss'
import EmojiTitle from '../Title/EmojiTitle'
import Link from 'next/link'
import Image from 'next/image'
import { MylinkProps } from '@/types/Mylink'
import Logo from '@/assets/logo.png'
import Mylink from '../Mylink'

const Links: MylinkProps[] = [
    {
      label: "Github",
      link: "https://github.com/Matsuel",
      logo: <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor" />
      </svg>
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/matheo-lang",
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24" width="24"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="currentColor" /></svg>
    },
    {
      label: "Mail",
      link: "mailto:matheo.lang@ynov.com",
      logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="24" width="24"><path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" fill="currentColor" /></svg>
    }
  ]

const Infos = () => {
    return (
        <div className={styles.infos}>

            <div className={styles.about}>
                <EmojiTitle emojiCode="1f464" size={30}>
                    <h3 className={styles.aboutTitle}>
                        Profil
                    </h3>
                </EmojiTitle>

                <Link className={styles.aboutwrap} href="https://matsuel.netlify.app" target="_blank">
                    <Image
                        src={Logo}
                        alt="monlogo"
                        className={styles.MonLogo}
                    />
                    <h3 className={styles.name}>
                        Mathéo Lang
                    </h3>
                    <p className={styles.nameSubtitle}>
                        Développeur web Full Stack
                    </p>

                </Link>

            </div>

            <div className={styles.contact}>
                <EmojiTitle emojiCode="1f4e3" size={30}>
                    <h3 className={styles.contactTitle}>
                        Contact
                    </h3>
                </EmojiTitle>
                {Links.map((link) => (
                    <Mylink key={link.label} {...link} />
                ))}
            </div>
        </div>
    )
}

export default Infos