'use client'

export const MainButton = (props : {
    onClick : Function
}) => {
    const {onClick} = props;
    return (
        <button onClick={() => onClick()} className="font-mono bg-green-500 px-4 py-2 rounded-lg text-md text-white font-medium hover:bg-green-600">START</button>
    )
}