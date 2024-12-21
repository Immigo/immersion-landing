'use client'

import { useEffect } from "react"
import { trackJourneyPageEvent } from "./analytics"

export const JourneyAnalytics = () => {
    useEffect(() => {
        trackJourneyPageEvent('V2: Visited journey page', {
            version : 'v2-immersion'
        })
    }, [])
    return (<></>);
}