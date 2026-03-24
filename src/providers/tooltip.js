'use client'
import React, { createContext, useContext, useState, useRef } from 'react'
import { Tooltip } from '@/components/tooltip'


const TooltipContext = createContext({
    open: false,
    word: '',
    openTooltip: () => {},
    closeTooltip: () => {},
    anchorRef: { current: null },
})

export const useTooltip = () => useContext(TooltipContext);

export function TooltipProvider({ children })
{
    const ref = useRef(null)
    const [state, setState] = useState({
        open: false,
        word: ''
    })

    const openTooltip = (anchorRef, word) => {
        setState({
            open: true,
            word
        })
        ref.current = anchorRef.current
    };

    const closeTooltip = () => {
        setState({
            open: false,
            word: '',
        })
        ref.current = null

    };

    const value = {
        open: state.open,
        word: state.word,
        openTooltip,
        closeTooltip,
        anchorRef: ref,
    }

    return (
        <TooltipContext.Provider value={value}>
            <Tooltip/>
        {children}
        </TooltipContext.Provider>
    )
}