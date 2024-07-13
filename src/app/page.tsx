"use client"

import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";

import TitleComponent from "@/components/Title";
import Shinken from "@/assets/shinken.png"
import LinkSvg from "@/assets/link.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ChevronRight from "@/assets/ChevronRight.svg";

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar />
      <TitleComponent emojiCode="1f468-200d-1f4bb">
        Stage 2024
      </TitleComponent>

      <Link className={styles.entreprise} href="https://www.shinken-enterprise.com/" target="_blank">
        <Image src={Shinken} alt="Shinken" className={styles.shinkenLogo} />
        {/* Supprimer ce composant et mettre EmojiTitle et Title à la place comme ça on peut appliquer les styles comme on veut */}
        <TitleComponent style={{ fontSize: '5rem'}}>
          Shinken Solutions
        </TitleComponent>
        <Image src={LinkSvg} alt="Link" className={styles.linkSvg} />
      </Link>

      <Button style={{ marginTop: "100px" }}>
        Télécharger le PDF
        <Image src={ChevronRight} alt="ChevronRight" className={styles.chevronRight} />
      </Button>

    </main>
  );
}