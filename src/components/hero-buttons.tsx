'use client'

import { trackHomePageEvent } from "@/app/analytics/analytics"
import { MainButton } from "./buttons/mainButton"

export const HeroButtons = () => {
    return (
        <div>
          <MainButton onClick={() => {
            window.open('/journey')
            trackHomePageEvent('V2: Clicked start button on the jumbotron');
          }
        } />
        </div>
    )
}