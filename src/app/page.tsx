"use client"

import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import EmojiTitle from "@/components/Title/EmojiTitle";
import Title from "@/components/Title/Title";
import Infos from "@/components/Infos";
import { EntrepriseInfos } from "@/types/Entreprise";
import Entreprise from "@/components/Entreprise";

const Stages: EntrepriseInfos[] = [
  {
    name: "Shinken Solutions",
    description: "cc",
    dates: "17/06/2024 09/08/2024",
    side: "back",
    emoji: "1f4bb",
    href: "/shinken",
    tags: [
      "Python",
      "Js",
      "Doc",
    ],
  }
]


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
          {Stages.map((stage) => (
            <Entreprise {...stage} key={stage.name} />
          ))}          

        </div>

        <Infos />
      </div>

    </main>
  );
}