import { useState, useEffect } from 'react'
import { useTooltip } from '@/providers/tooltip'
import styles from './tooltip.module.css'

export function Tooltip () {
    
    const [anchorPosition, setAnchorPosition] = useState({})

    const {
        anchorRef,
        open,
        word,
        closeTooltip
    } = useTooltip()


    useEffect(() => {
        const newPosition = anchorRef.current?.getBoundingClientRect()
        setAnchorPosition(newPosition)
    }, [open])

    //const anchorPosition = anchorRef.current?.getBoundingClientRect()
    
    console.log('anchorPosition', anchorPosition)
    
    return (
        <div
        className={styles.tooltip}
        style={{
            display: open ? 'grid' : 'none',
            top: anchorPosition?.y + 30
        }}
        >
            <div>
            {word}
            </div>
            <div
            className={styles.tooltipCloseButton}
            onClick={() => closeTooltip()}
            >X</div>
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