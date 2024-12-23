'use client'

export const MainButton = (props : {
    text : string,
    onClick : () => void
}) => {
    const {text, onClick} = props;
    return (
        <button onClick={() => onClick()} className="font-mono bg-green-500 px-4 py-2 rounded-lg text-md text-white font-medium hover:bg-green-600">{text}</button>
    )
}