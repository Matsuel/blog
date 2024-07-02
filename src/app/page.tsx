"use client"

import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import Title from "@/components/Title";
import Shinken from "@/assets/shinken.png"
import LinkSvg from "@/assets/link.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Title
        content="Stage 2024"
        emojiCode="1f468-200d-1f4bb"
      />

      <Link className={styles.entreprise} href="https://www.shinken-enterprise.com/" target="_blank">
        <Image src={Shinken} alt="Shinken" className={styles.shinkenLogo} />
        <Title content="Shinken Solutions" emojiCode="" />
        <Image src={LinkSvg} alt="Link" className={styles.linkSvg} />
      </Link>

    </main>
  );
}