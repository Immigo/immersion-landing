'use client'

import { useEffect } from "react"
import { trackHomePageEvent } from "./analytics"

export const HomeAnalytics = () => {
    useEffect(() => {
        trackHomePageEvent('V2: Clicked start button on the jumbotron')
    }, [])
    return (<></>);
}