'use client'

export const MainButton = (props : {
    text : string,
    onClick : () => void
}) => {
    const {text, onClick} = props;
    return (
        <button onClick={() => onClick()} className="font-mono border-white border px-4 py-2 text-md text-white font-medium hover:bg-white hover:text-black">{text}</button>
    )
}