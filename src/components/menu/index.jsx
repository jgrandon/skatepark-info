'use client'
import { useState, useEffect } from 'react'
import styles from '@/components/menu/menu.module.css'
import { FaBars as MenuIcon } from "react-icons/fa";

export default function Menu () {
    const [isOpen, setIsOpen] = useState(false)
    const [section, setSection] = useState('noNE')
    //location  .pathname?.split('/')[1]

    const titles = {
        'home': 'Paginal Principal',
    }

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
                {titles[section ?? 'home']}
            </div>
            <div></div>
        </div>
            

        <div
        className={styles.optionsWrapper}
        style={{ display: isOpen ? 'grid' : 'none' }}
        >
            <Option to={"/home"}>Home</Option>
            <Option to={"/protections"}>Protecciones</Option>
            <Option to={"/use"}>Uso del espacio</Option>
            <Option to={"/shared-use"}>Uso compartido del espacio</Option> 
            <Option to={"/vocabulary"}>Terminologia</Option> 
        </div>
    </div>
}

const Option = (props) => (
    <a 
    className={styles.option}
    href={props.to ?? ''}
    >
        {props.children}
    </a>
)