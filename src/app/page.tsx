"use client"

import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import EmojiTitle from "@/components/Title/EmojiTitle";
import Title from "@/components/Title/Title";
import Infos from "@/components/Infos";
import Entreprise from "@/components/Entreprise";
import { Entreprises } from "@/datas/Entreprises";


export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar />
      <EmojiTitle emojiCode="1f468-200d-1f4bb">
        <Title>
          Blog Stages
        </Title>
      </EmojiTitle>

      <div className={styles.mainContainer}>
        <div className={styles.left} />

        <div className={styles.container}>


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
          </div>

        </div>

        <Infos />
      </div>

    </main>
  );
}