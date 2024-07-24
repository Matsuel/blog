"use client"

import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'
import styles from './Shinken.module.scss'
import Badge from '@/components/Badge'
import { Emoji } from 'emoji-picker-react'
import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import NewProps from '@/assets/host_new_property.png'
import Logo from '@/app/favicon.ico'
import Link from 'next/link'
import CloseCross from '@/assets/CloseCross.svg'

const Shinken = () => {

  return (
    <DefaultLayout>


      Supprimer ça et mettre un modal qui s'ouvre sur la page princpiae quand on clique sur un article à lire avec un filtre de luminosité qui masque un peu les autres éléments
      Taille fixe et scroll dedans

      {/* <div className={styles.article}>

        <div className={styles.closeButtonWrapper}>
          <Link className={styles.closeButton} href="/">
            <Image src={CloseCross} className={styles.closeButtonImg} alt='close button' />

          </Link>
        </div>

        <div className={styles.articleBadge}>
          <Badge variant='back'>
            <Emoji unified={"1f4bb"} size={15} />
            Front

          </Badge>
        </div>

        <div className={styles.articleTitle}>
          Article 1
        </div>

        <Link className={styles.author} href="https://matsuel.netlify.app" target='_blank'>
          <div className={styles.authorInfos}>
            <Image src={Logo} className={styles.authorLogo} alt='logo' />
            Mathéo Lang
          </div>

          <div className={styles.authorSeparator} />

          <div className={styles.authorDate}>
            24 Juillet 2024
          </div>

        </Link>

        <div className={styles.articleSubtitle}>
          Article 1
        </div>

        <ReactMarkdown className={styles.articleParagraphe}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie turpis sit amet nibh tristique, a varius arcu tristique. Sed aliquam arcu leo, ornare feugiat lacus ullamcorper ac. Aliquam erat volutpat. Ut viverra risus non nisl rutrum, at venenatis eros rutrum. Nunc ac lacinia lacus, a commodo lorem. Aenean non viverra urna. Suspendisse euismod luctus nisi, lobortis placerat risus hendrerit quis. Donec nibh augue, finibus vel dapibus nec, lacinia sed est. Duis ultrices vulputate bibendum. Suspendisse at mattis ante.
        </ReactMarkdown>

        <Image
          src={NewProps}
          className={styles.articleImage}
          alt='cc'
        /> */}

        {/* Arguements direction row ou column */}
        {/* Arguements index pour liste nuérotée */}
        {/* <div className={styles.articleList}>
          <div className={styles.articleListElement}>1</div>
          <div className={styles.articleListElement}>1</div>
          <div className={styles.articleListElement}>1</div>
          <div className={styles.articleListElement}>1</div>
        </div>

      </div> */}

    </DefaultLayout>
  )
}

export default Shinken