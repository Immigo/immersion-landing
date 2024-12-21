'use client'

import { useEffect } from "react"
import { trackHomePageEvent } from "./analytics"

export const HomeAnalytics = () => {
    useEffect(() => {
        trackHomePageEvent('V2: Main landing page visited', {
            via : window.localStorage.getItem('via') ?? undefined,
            group  : window.localStorage.getItem('test_group') ?? undefined,
            version : 'v2-immersion'
        });
    }, [])
    return (<></>);
}