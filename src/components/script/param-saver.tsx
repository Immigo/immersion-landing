'use client'

export const ParamSaver = (props : {

}) => {
    const urlParams = new URLSearchParams(window.location.search);
    const rewardfulVia =  (urlParams.get('via') ?? window.localStorage.getItem('via')) ?? undefined;

    if(rewardfulVia) {
        window.localStorage.setItem('via', rewardfulVia);
    }

    return (
        <></>
    );
}