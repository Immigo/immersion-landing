'use client'

import { ArrowRightIcon } from "@heroicons/react/16/solid"

export const JourneyButton = (props : {
    title : string,
    description : string,
    imageUrl : string,
    redirectUrl ? : string
}) => {
    const {title, description, imageUrl, redirectUrl} = props;

    return (
      <div className="bg-black p-4 rounded-lg flex md:flex-row flex-col" onClick={() => {window.open(redirectUrl)}}>
        <img  src={imageUrl} className="rounded-lg mb-4 md:w-64 h-48 object-cover border-4 border-purple-500 hover:border-purple-300 cursor-pointer"/>
        <div className="border-4 border-green-500 rounded-md h-48 w-full md:ml-12 text-left p-6 cursor-pointer hover:border-green-300">
          <h2 className="text-xl font-bold flex items-center"><ArrowRightIcon className="w-5 h-5 mr-2" />{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    )
}