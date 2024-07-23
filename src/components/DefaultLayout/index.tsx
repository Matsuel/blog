import React from 'react'
import styles from './DefaultLayout.module.scss'
import Navbar from '../Navbar'
import Infos from '../Infos';
import EmojiTitle from '../Title/EmojiTitle';
import Title from '../Title/Title';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  emojiCode?: string;
  size?: number;
  title?: string;
}

const DefaultLayout = ({
  emojiCode,
  size,
  title,
  children,
  ...props
}: LayoutProps) => {
  return (
    <div className={styles.main} {...props}>
      <Navbar />
      <EmojiTitle emojiCode={emojiCode} size={size}>
        <Title>
          {title}
        </Title>
      </EmojiTitle>

      <div className={styles.mainContainer}>
        <div className={styles.left} />

        <div className={styles.container}>
          {children}
        </div>
        <Infos />
      </div>

    </div>
  )
}

export default DefaultLayout