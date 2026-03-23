'use client'
import "@/styles/globals.css";
import { Saira } from "next/font/google"
import Menu from '@/components/menu'
import styles from '@/pages/app.module.css'

const font = Saira({
  variable: "--font-saira",
  weight: "400",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }) {
  return (  
    <div className={`${styles.main} ${font.className}`}>
      <Menu />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Component {...pageProps} />;
        </div>
      </div>
    </div>
  )
}
