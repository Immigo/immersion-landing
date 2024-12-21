'use client'

import { useEffect } from "react";

export const ParamSaver = (props : {

}) => {


    useEffect(() =>  {
        const urlParams = new URLSearchParams(window.location.search);
        const rewardfulVia =  (urlParams.get('via') ?? window.localStorage.getItem('via')) ?? undefined;
        if(rewardfulVia) {
            window.localStorage.setItem('via', rewardfulVia);
        }
    }, [])

    return (
        <></>
    );
}