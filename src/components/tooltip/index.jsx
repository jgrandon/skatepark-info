import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTooltip } from '@/providers/tooltip'
import styles from './tooltip.module.css'
import { Library } from '../library'


export function Tooltip ()
{
    const [anchorPosition, setAnchorPosition] = useState({})
    const [scrollY, setScrollY] = useState(0)

    const {
        anchorRef,
        open,
        word,
        openTooltip,
        closeTooltip,
        hideTooltip
    } = useTooltip()


    useEffect(() => {
        refreshPosition()
    }, [open])

    useEffect(() => {
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', refreshPosition);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', refreshPosition);
        };
    }, []);

    const refreshPosition = () => {
        const minRenderingThreshold = 70
        const maxRenderingThreshold = 700
        const newPosition = anchorRef.current?.getBoundingClientRect().y
        // console.log('newPosition', newPosition)

        setAnchorPosition(newPosition)

        if (
            open==false 
            && newPosition > minRenderingThreshold
        ) {
            openTooltip(anchorRef)
        }

        // avoid rendering tooltip when anchor is out of view
        if (newPosition <= minRenderingThreshold) {
            hideTooltip() 
        }
    }

    //const anchorPosition = anchorRef.current?.getBoundingClientRect()
    
    // console.log('anchorPosition', anchorPosition)

    const wordDefinition = Library(word)
    
    return (
        <div
        className={styles.tooltip}
        style={{
            display: open ? 'grid' : 'none',
            top: anchorPosition + 30
        }}
        >
            <div>
            {word}
            </div>
            <div
            className={styles.tooltipCloseButton}
            onClick={() => closeTooltip()}
            >X</div>
            <div className={styles.content}>
                <div>
                {wordDefinition?.content}

                </div>
                <div>
                    {wordDefinition?.images.map(image => (
                        <Image 
                        src={`/library/${image}`}
                        width={50}
                        height={50}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}