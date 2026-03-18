import Menu from '@/components/menu'
import styles from '@/pages/landing.module.css'

export default function Landing () {
    return (
    <div className={styles.main}>
        <Menu />
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                some text xd
            </div>
        </div>
    </div>
    )
}