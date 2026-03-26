'use client'
import "@/styles/globals.css";
import { Saira } from "next/font/google"
import Menu from '@/components/menu'
import styles from '@/pages/app.module.css'
import { TooltipProvider } from "@/providers/tooltip";

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
          
          <TooltipProvider>
            <Component {...pageProps} />;
          </TooltipProvider>
        
        </div>
      </div>
      <link
        className={styles.icon}
        rel="icon"
        href="/favicon.ico?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
    </div>
  )
}
