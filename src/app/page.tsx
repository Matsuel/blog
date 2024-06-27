"use client"

import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import Title from "@/components/Title";
import EmojiPicker from "emoji-picker-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Title content="Stage 2024" emojiCode="1f468-200d-1f4bb" />

    </main>
  );
}