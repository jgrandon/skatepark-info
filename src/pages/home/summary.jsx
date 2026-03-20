import styles from "@/styles/Home.module.css";

export default function Summary () {
    return <div>
        <div className={styles.title}>
            En esta pagina encontraremos:
        </div>

        <ul>
            <li>Recomendaciones para implementacion personal</li>
            <li>Recomedaciones para el uso del espacio</li>
            <li>Guia de uso compartido del espacio</li>
            <li>Vocabulario skater y definiciones</li>
        </ul>
    </div>
}