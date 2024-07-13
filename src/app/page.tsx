"use client"

import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";

import Shinken from "@/assets/shinken.png"
import LinkSvg from "@/assets/link.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import EmojiTitle from "@/components/Title/EmojiTitle";
import Title from "@/components/Title/Title";

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar />
      <EmojiTitle emojiCode="1f468-200d-1f4bb">
        <Title>
          Stage 2024
        </Title>
      </EmojiTitle>

      <Link className={styles.entreprise} href="https://www.shinken-enterprise.com/" target="_blank">
        <Image src={Shinken} alt="Shinken" className={styles.shinkenLogo} />
        <Title>
          Shinken Solutions
        </Title>
        <Image src={LinkSvg} alt="Link" className={styles.linkSvg} />
      </Link>

      <Button style={{ marginTop: "100px" }} variant="primary">
        Télécharger le PDF
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" width="24" height="24">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </Button>

    </main>
  );
}