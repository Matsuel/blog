"use client"

import styles from "./page.module.scss";
import EmojiTitle from "@/components/Title/EmojiTitle";
import Entreprise from "@/components/Entreprise";
import { Entreprises } from "@/datas/Entreprises";
import { Articles } from "@/datas/Articles";
import ArticleHome from "@/components/ArticleHome";
import DefaultLayout from "@/components/DefaultLayout";


export default function Home() {

  return (
    <DefaultLayout emojiCode="1f468-200d-1f4bb" title="Blog Stages">
      <div className={styles.dataContainer}>

        <EmojiTitle emojiCode="1f3e2" size={30}>
          <h2 className={styles.containerTitle}>
            Entreprises
          </h2>
        </EmojiTitle>
        {Entreprises.map((stage) => (
          <Entreprise {...stage} key={stage.name} />
        ))}
      </div>


      <div className={styles.dataContainer}>
        <EmojiTitle emojiCode="1f4da" size={30}>
          <h2 className={styles.containerTitle}>
            Articles
          </h2>
        </EmojiTitle>
        {Articles.map((article) => (
          <ArticleHome {...article} key={article.description} />
        ))}
      </div>
    </DefaultLayout >
  )
}