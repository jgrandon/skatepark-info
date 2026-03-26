'use client'
import React, { createContext, useContext, useState, useRef } from 'react'
import { Tooltip } from '@/components/tooltip'


const TooltipContext = createContext({
    open: false,
    word: '',
    anchorRef: { current: null },
    openTooltip: () => {},
    closeTooltip: () => {},
    hideTooltip: () => {},
})

export const useTooltip = () => useContext(TooltipContext);

export function TooltipProvider({ children })
{
    const ref = useRef(null)
    const [open, setOpen] = useState(false)
    const [word, setWord] = useState('')

    const openTooltip = (anchorRef) => {
        setOpen(true)
        setWord(anchorRef.current?.innerHTML)
        ref.current = anchorRef.current
    };

    const hideTooltip = () => setOpen(false)

    const closeTooltip = () => {
        setOpen(false) 
        setWord('')
        ref.current = null
    }

    const value = {
        open,
        word,
        anchorRef: ref,
        openTooltip,
        closeTooltip,
        hideTooltip,
    }

    return (
        <TooltipContext.Provider value={value}>
            <Tooltip/>
            {children}
        </TooltipContext.Provider>
    )
}