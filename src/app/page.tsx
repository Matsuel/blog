import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Title content="test" emojiCode="1f468-200d-1f4bb" />

    </main>
  );
}
