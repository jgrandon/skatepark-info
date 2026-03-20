import "@/styles/globals.css";
import Menu from '@/components/menu'
import styles from '@/pages/app.module.css'

export default function App({ Component, pageProps }) {
  return (  
    <div className={styles.main}>
        <Menu />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <Component {...pageProps} />;
          </div>
        </div>
    </div>
  )
}
