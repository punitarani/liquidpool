import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.description}></div>
      <div className={styles.center}></div>
      <div className={styles.grid}></div>
    </main>
  );
}
