'use client'

import { ArrowRightIcon } from "@heroicons/react/16/solid"
import { trackJourneyPageEvent } from "../analytics/journey/analytics";
import { useLocale } from "next-intl";

export const JourneyButton = (props : {
    title : string,
    description : string,
    imageUrl : string,
    redirectUrl ? : string
}) => {
    const {title, description, imageUrl, redirectUrl} = props;

    const localeActive = useLocale();

    return (
      <div className="bg-black p-4 rounded-lg flex md:flex-row flex-col">
        <img onClick={() => {
            trackJourneyPageEvent('V2: Clicked a journey', {
                picOrCard : 'pic',
                via : window.localStorage.getItem('via') ?? undefined,
                group  : window.localStorage.getItem('test_group') ?? undefined,
                version : 'v2-immersion'
            });
            const rewardfulVia = window.localStorage.getItem('via');
            const lang = localeActive;
            let currency;
            const testGroupToken = window.localStorage.getItem('test_group');
            const params = `?${(rewardfulVia ? `via=${rewardfulVia}` : '')}${(lang) ? `&lang=${lang}` : ''}${(currency) ? `&currency=${currency}${(testGroupToken) ? `&group=${testGroupToken}` : ''}` : ''}`
            window.open(`${redirectUrl}${params}`);
        }}  src={imageUrl} className="rounded-lg mb-4 md:w-64 h-48 object-cover border-4 border-purple-500 hover:border-purple-300 cursor-pointer"/>
        <div
            onClick={() => {
                trackJourneyPageEvent('V2: Clicked a journey', {
                    picOrCard : 'card',
                    via : window.localStorage.getItem('via') ?? undefined,
                    group  : window.localStorage.getItem('test_group') ?? undefined,
                    version : 'v2-immersion'
                });
                const rewardfulVia = window.localStorage.getItem('via');
                const lang = localeActive;
                let currency;
                const testGroupToken = window.localStorage.getItem('test_group');
                const params = `?${(rewardfulVia ? `via=${rewardfulVia}` : '')}${(lang) ? `&lang=${lang}` : ''}${(currency) ? `&currency=${currency}${(testGroupToken) ? `&group=${testGroupToken}` : ''}` : ''}`
                window.open(`${redirectUrl}${params}`);
            }} 
            className="border-4 border-green-500 rounded-md h-48 w-full md:ml-12 text-left p-6 cursor-pointer hover:border-green-300">
          <h2 className="text-xl font-bold flex items-center"><ArrowRightIcon className="w-5 h-5 mr-2" />{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    )
}