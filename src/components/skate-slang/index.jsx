import { useState } from 'react'
import styles from './skate-slang.module.css'

export function Slang (props) {
    const [isTooltipOpen, setTooltipOpen] = useState(false)

    console.log('isTooltipOpen =>', isTooltipOpen)
    
    return <span 
    className={styles.term}
    onClick={() => setTooltipOpen(!isTooltipOpen)}
    >
        <Tooltip isOpen={isTooltipOpen}/>
        {props.children}
    </span>
}



function Tooltip (props) {
    const { isOpen = false } = props

    return (
        <div
        className={styles.tooltip}
        style={{
            display: isOpen ? 'inline' : 'none'
        }}
        >
            Tooltip
        </div>
    )
}