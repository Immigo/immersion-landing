'use client'

import { useEffect } from "react"
import { trackJourneyPageEvent } from "./analytics"

export const JourneyAnalytics = () => {
    useEffect(() => {
        trackJourneyPageEvent('V2: Visited journey page', {
            via : window.localStorage.getItem('via') ?? undefined,
            group  : window.localStorage.getItem('test_group') ?? undefined,
            version : 'v2-immersion'
        })
    }, [])
    return (<></>);
}