import styles from "@/styles/Home.module.css"
import { Slang } from '@/components/skate-slang'

export default function Disclaimer () {
    return <div>
            <div className={styles.title}>
                ¡OJO!
            </div>
            <div>
                Es importante destacar que no estas obligado a tomar ninguna de estas recomendaciones, pero si las sigues garantizas la seguridad de tu hijo y la buena relacion con las demas personas que usan el espacio. <Slang word="baranda"/>
            </div>
        </div>
}