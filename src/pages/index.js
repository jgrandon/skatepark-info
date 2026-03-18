import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <div className={styles.title}>
        Protege a tus hijos y Aprende a convivir en un skatepar
      </div>
      <div>
        <div className={styles.subtitle}>
          El Peligro:
        </div>
        <div>
          El skatepark es un lugar de aprendizaje y de mucho disfrute pero que, dado la naturaleza de los deportes extremos, es siempre propenso a accidentes.
          Una tabla que sale volando, otro skater que se nos cruza, poco control del truco o maniobra que estamos intentando son solo algunas de las situaciones mas comunes dentro del skatepark.
        </div>
      </div>

      propiosito:
informar y ayudar a proteger a los niños de los multiples peligros presentes en un skatepark

      {/*}
        <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      */}
    </div>
  );
}
