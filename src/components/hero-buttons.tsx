'use client'

import { trackHomePageEvent } from "@/components/analytics/analytics"
import { MainButton } from "./buttons/mainButton"
import { useLocale } from "next-intl"

export const HeroButtons = (props : {
    mainButtonText : string
}) => {
    const {mainButtonText} = props;

    const localeActive = useLocale();

    return (
        <div>
          <MainButton 
          text={mainButtonText}
          onClick={() => {
            window.open(`${localeActive}/journey`)
            trackHomePageEvent('V2: Clicked start button on the jumbotron');
          }
        } />
        </div>
    )
}