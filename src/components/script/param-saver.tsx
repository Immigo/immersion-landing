'use client'

import { useEffect } from "react";

export const ParamSaver = () => {


    useEffect(() =>  {
        const urlParams = new URLSearchParams(window.location.search);
        const rewardfulVia =  (urlParams.get('via') ?? window.localStorage.getItem('via')) ?? 'immigo-star';
        const testGroupToken =  urlParams.get('group') ?? window.localStorage.getItem('test_group');
        if(testGroupToken) {
            window.localStorage.setItem('test_group', testGroupToken);
        }
        if(rewardfulVia) {
            window.localStorage.setItem('via', rewardfulVia);
        }
    }, [])

    return (
        <></>
    );
}