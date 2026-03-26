import styles from "@/styles/Home.module.css";
import { SlangDetector } from "@/components/slang-detector";

export default function Purpouse () {
    return <div>
        <div className={styles.title}>
            ¿De que se trata esto?
        </div>
        <SlangDetector
        text="Este es un proyecto donde pretendemos informar sobre las dinamicas propias de un skatepark poniendo el foco en evitar los accidentes y ayudar a proteger e integrar a los niños, sus padres y todo aquel que este partiendo en estos espacios."/>
{/*
        propiosito:
informar y ayudar a proteger a los niños de los multiples peligros presentes en un skatepark

*/}
</div>
}