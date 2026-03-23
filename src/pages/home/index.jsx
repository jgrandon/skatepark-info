
//import { Geist, Geist_Mono, Saira, Fjalla_One } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Purpouse from "@/pages/home/purpouse"
import Danger from "@/pages/home/danger"
import Summary from "@/pages/home/summary"
import Disclaimer from "@/pages/home/disclaimer"

/*
const font1 = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const font2 = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})
 

const font1 = Saira({
  variable: "--font-saira",
  weight: "400",
  subsets: ["latin"],
})

const font2 = Fjalla_One({
  //variable: "--font-fjalla-one",
  weight: "400",
  subsets: ["latin"],
})

*/
export default function Home() {
  return (
    <div
      //className={`${styles.page} ${font1.variable} ${font2.variable}`}
      className={styles.page}
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