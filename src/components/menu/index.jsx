import styles from '@/components/menu/menu.module.css'

export default function Menu () {

    const Option = (props) => (
        <a 
        className={styles.option}
        href={props.to ?? ''}
        >
            {props.children}
        </a>
    )

    return <div className={styles.menu}>
        <Option to={"/home"}>Home</Option>
        <Option to={"/protections"}>Protecciones</Option>
        <Option to={"/use"}>Uso del espacio</Option>
        <Option to={"/shared-use"}>Uso compartido del espacio</Option> 
        <Option to={"/vocabulary"}>Terminologia</Option> 
    </div>
}