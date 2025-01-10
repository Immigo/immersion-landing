'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const MainButton = (props : {
    text : string,
    onClick : () => void
}) => {
    const {text, onClick} = props;
    return (
        <button onClick={() => onClick()} className="font-mono border-white border px-4 py-2 text-md text-white font-medium hover:bg-white hover:text-black flex justify-center items-center">
            <span>{text}</span><ArrowRightIcon className="w-5 h-5 ml-4" />
        </button>
    )
}