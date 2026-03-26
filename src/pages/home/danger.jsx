import styles from "@/styles/Home.module.css";
import { SlangDetector } from "@/components/slang-detector";

export default function Danger () {
    return <div>
        <div>
            <div className={styles.subtitle}>
            El Peligro:
            </div>
            <SlangDetector text="El skatepark es un lugar de aprendizaje y de mucho disfrute pero que, dado la naturaleza de los deportes extremos, es siempre propenso a accidentes.
            Una tabla que sale volando, otro skater que se nos cruza, poco control del truco o maniobra que estamos intentando son solo algunas de las situaciones mas comunes dentro del skatepark."
            />
        </div>
    </div>
}