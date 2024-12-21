'use client'

import { useEffect } from "react"
import { trackHomePageEvent } from "./analytics"

export const HomeAnalytics = () => {
    useEffect(() => {
        trackHomePageEvent('V2: Main landing page visited', {
            version : 'v2-immersion'
        })
    }, [])
    return (<></>);
}