"use client"

import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import EmojiTitle from "@/components/Title/EmojiTitle";
import Title from "@/components/Title/Title";
import Button from "@/components/Button";

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar />
      <EmojiTitle emojiCode="1f468-200d-1f4bb">
        <Title>
          Blog Stages
        </Title>
      </EmojiTitle>

      <div className={styles.container}>
      {/* Lister les entreprises avec une image, un badge avec le côté bossé (front back), le nom de l'entreprise, le nom du stagiaire, la date de début et de fin du stage, le lien vers le site de l'entreprise, le lien vers le rapport de stage. */}
      </div>
    </main>
  );
}