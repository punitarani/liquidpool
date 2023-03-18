import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>LiquidPool</h1>
      <NavBar />
      <div className={styles.description}></div>

      <div className={styles.center}></div>

      <div className={styles.grid}></div>
    </main>
  );
}
