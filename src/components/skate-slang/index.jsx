import { useRef, useState, useEffect } from 'react'
import { Tooltip } from '../tooltip'
import { useTooltip } from '@/providers/tooltip';
import styles from './skate-slang.module.css'

export function Slang (props) {

    const { word } = props
    const [open, setOpen] = useState(false)
    const ref = useRef()
    const {
        open: tooltipOpen,
        word: tooltipWord,
        openTooltip,
        closeTooltip,
        anchorRef
    } = useTooltip()

    console.log('open =>', open)
    console.log('tooltipWord =>', tooltipWord)
    
    useEffect(()=> {
        if (anchorRef.current != ref.current) {
            setOpen(false)
        }
    }, [anchorRef.current])

    const handleClick = (event) => {
        if (open) {
            setOpen(false)
            closeTooltip()
        }
        else {
            setOpen(true)
            openTooltip(ref)
        }    
    }

    
    return <span 
    ref={ref}
    className={styles.term}
    onClick={handleClick}
    style={{
        color: open ? 'yellow' : 'white'
    }}
    >
        {word}
    </span>
}