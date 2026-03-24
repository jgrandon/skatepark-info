import { useRef } from 'react'
import { Tooltip } from '../tooltip'
import { useTooltip } from '@/providers/tooltip';
import styles from './skate-slang.module.css'

export function Slang (props) {
    const { word } = props
    const ref = useRef()
    const {
        open,
        word: tooltipWord,
        openTooltip,
        closeTooltip,
    } = useTooltip()

    console.log('open =>', open)
    console.log('tooltipWord =>', tooltipWord)
    
    const handleClick = (event) => {
        if (open) closeTooltip()
        else openTooltip(ref)
    }
    return <span 
    ref={ref}
    className={styles.term}
    onClick={handleClick}
    >
        {word}
    </span>
}