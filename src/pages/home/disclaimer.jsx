import styles from "@/styles/Home.module.css"
import { Slang } from '@/components/skate-slang'
import { SlangDetector } from '@/components/slang-detector'
export default function Disclaimer () {
    return <div>
            <div className={styles.title}>
                ¡OJO!
            </div>
            <SlangDetector text="Es importante destacar que no estas obligado a tomar ninguna de estas recomendaciones, pero si las sigues garantizas la seguridad de tu hijo y la buena relacion con las demas personas que usan el espacio." />
        </div>
}