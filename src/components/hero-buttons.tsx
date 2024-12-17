'use client'

import { MainButton } from "./buttons/mainButton"

export const HeroButtons = (props : {

}) => {
    return (
        <div>
          <MainButton onClick={() => {window.open('/journey')}} />
        </div>
    )
}