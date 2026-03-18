import styles from '@/components/menu/menu.module.css'

export default function Menu () {

    const Option = (props) => (
        <div className={styles.option}>
            {props.children}
        </div>
    )

    return <div className={styles.menu}>
        <Option>Home</Option>
        <Option>Protecciones</Option>
        <Option>Uso del espacio</Option>
        <Option>Uso compartido del espacio</Option> 
    </div>
}