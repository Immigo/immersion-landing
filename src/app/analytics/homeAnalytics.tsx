'use client'

import { useEffect } from "react"
import { trackHomePageEvent } from "./analytics"

export const HomeAnalytics = () => {
    useEffect(() => {
        trackHomePageEvent()
    }, [])
    return (<></>);
}