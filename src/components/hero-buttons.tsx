'use client'

import { MainButton } from "./buttons/mainButton"

export const HeroButtons = () => {
    return (
        <div>
          <MainButton onClick={() => {window.open('/journey')}} />
        </div>
    )
}