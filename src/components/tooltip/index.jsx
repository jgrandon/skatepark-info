import { useState, useEffect } from 'react'
import { useTooltip } from '@/providers/tooltip'
import styles from './tooltip.module.css'
import { Library } from '../library'
import { Carousel } from '@/components/carousel'

export function Tooltip ()
{
    const [anchorPosition, setAnchorPosition] = useState({})

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
            <div className={styles.title}>{word}</div>

            <div
            className={styles.tooltipCloseButton}
            onClick={() => closeTooltip()}
            >X</div>
            
            <div 
            className={styles.contentWrapper}
            style={{
                gridTemplateColumns: 
                    wordDefinition?.images?.length>0 
                    ? '1fr 1fr' : '1fr 0fr'
            }}
            >
                <div className={styles.content}>
                    {wordDefinition?.content}
                </div>

                { !wordDefinition?.images 
                    ? null
                    : <Carousel data={wordDefinition.images}/>
                }
            </div>
        </div>
    )
}