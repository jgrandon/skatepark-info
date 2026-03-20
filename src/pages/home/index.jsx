
import { Geist, Geist_Mono } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Purpouse from "@/pages/home/purpouse"
import Danger from "@/pages/home/danger"
import Summary from "@/pages/home/summary"
import Disclaimer from "@/pages/home/disclaimer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <Purpouse />
      <Danger />
      <Summary />
      <Disclaimer />
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
  )
}