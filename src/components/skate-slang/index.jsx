import { useState } from 'react'
import styles from './skate-slang.module.css'

export function Slang (props) {
    const { word } = props
    const [isTooltipOpen, setTooltipOpen] = useState(false)

    console.log('isTooltipOpen =>', isTooltipOpen)
    
    return <span 
    className={styles.term}
    onClick={() => setTooltipOpen(!isTooltipOpen)}
    >
        <Tooltip isOpen={isTooltipOpen} word={word}/>
        {word}
    </span>
}



function Tooltip (props) {
    const { isOpen = false, word } = props

    return (
        <div
        className={styles.tooltip}
        style={{
            display: isOpen ? 'grid' : 'none'
        }}
        >
            <div>
            {word}
            </div>
            <div className={styles.tooltipCloseButton}>X</div>
            <div>
                bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla
            </div>
        </div>
    )
}