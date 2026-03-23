'use client'
import { useState, useEffect } from 'react'
import styles from '@/components/menu/menu.module.css'
import { FaBars as MenuIcon } from "react-icons/fa";

const __TITLES__ = {
    'home': 'Paginal Principal',
    'protections': 'Protecciones',
    'use': 'Uso del espacio',
    'shared-use': 'Uso compartido del espacio',
    'vocabulary': 'Terminologia'
}

export default function Menu () {
    const [isOpen, setIsOpen] = useState(false)
    const [section, setSection] = useState('noNE')
    //location  .pathname?.split('/')[1]


    useEffect(() => {
        const location = window
            .location
            .pathname
            .split('/')[1] ?? 'home'

        console.log('window =>',window
            .location)
        console.log('location =>',location)
        if ([...location].length > 0) {
            setSection(location)
        }
    }, [section])

    return <div className={styles.menu}>
        <div className={styles.mobileMenu}>
            <button
            className={styles.button}
            onClick={() => setIsOpen(!isOpen)}
            >
                <MenuIcon 
                size="40"
                title="Menu"/>
            </button>
            <div className={styles.pageName}>
                {__TITLES__[section ?? 'home']}
            </div>
            <div></div>
        </div>
            

        <div
        className={styles.optionsWrapper}
        style={{ display: isOpen ? 'grid' : 'none' }}
        >
            <Option to={"home"} />
            <Option to={"protections"} />
            <Option to={"use"} />
            <Option to={"shared-use"} />
            <Option to={"vocabulary"} />
        </div>
    </div>
}

const Option = (props) => (
    <a 
    className={styles.option}
    href={`/${props.to}`}
    >
        {__TITLES__[props.to]}
    </a>
)