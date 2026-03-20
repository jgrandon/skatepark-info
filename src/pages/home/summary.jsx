import styles from "@/styles/Home.module.css"
import Link from "next/link"

export default function Summary () {
    return (<div>
        <div className={styles.title}>
            En esta pagina encontraremos:
        </div>

        <ol className={styles.linkWrapper}>
            <Topic to="/protections">Recomendaciones para implementacion personal</Topic>
            <Topic to="/use">Recomedaciones para el uso del espacio</Topic>
            <Topic to="/shared-use">Guia de uso compartido del espacio</Topic>
            <Topic to="/vocabulary">Terminologia skater y definiciones</Topic>
        </ol>
    </div>)
}

function Topic (props) {
    return (<li className={styles.link}>
        <Link href={props.to ?? ''}>
            {props.children}
        </Link>
    </li>)
}
