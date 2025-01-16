'use client'

import moment from "moment";
import { useEffect, useState } from "react";
import { trackHomePageEvent } from "../analytics/home/analytics";
import { useLocale } from "next-intl";


interface SessionObject {
    title : string,
    objective : string,
    ledByImg : string,
    ledByName : string
}

export const SessionContainer = (props : {
    sessions : SessionObject[],
    joinNextSession : string,
    objective : string,
    untilTheNextSession : string,
    nextImmersion : string,
    ledBy : string,
    tryItForFree : string
}) => {

    const {sessions, joinNextSession, objective, nextImmersion, ledBy, tryItForFree, untilTheNextSession} = props;

    const [untilNextSession, setUntilNextSession] = useState(new Date().valueOf());
    const [currentSession, setCurrentSession] = useState(sessions[Math.round(moment().hours() % 7)]);

    const localeActive = useLocale();

    useEffect(() => {
        function pollDom() {
            setUntilNextSession(new Date().valueOf());
            setCurrentSession(sessions[Math.round(moment().hours() % 7)]);
        };
        const interval = setInterval(pollDom, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="border border-white text-left p-6">
            <div className="font-bold text-2xl">
                {joinNextSession}
            </div>
            <div>
                <span className="text-blue-300 font-semibold">{objective}:</span> {currentSession.title}
            </div>
            <div>
                <span className="text-blue-300 font-semibold">{nextImmersion}:</span> {currentSession.objective}
            </div>
            <div className="flex items-center mt-4">
                <img
                    alt=""
                    src={currentSession.ledByImg}
                    className="inline-block size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                    <div className="font-semibold text-gray-300">
                        {ledBy}
                    </div>
                    <div className="font-bold">
                        {currentSession.ledByName}
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <div>
                    <div className="font-semibold">{untilTheNextSession}</div>
                    <div className="text-2xl text-blue-400 font-bold">{`0h ${59 - moment(untilNextSession).minutes()}m ${59 - moment(untilNextSession).seconds()}s`}</div>
                </div>
                <div 
                    className="border hover:bg-white hover:text-black cursor-pointer text-center md:text-2xl text-md md:p-4 p-2 flex items-center"
                    onClick={() => {
                        trackHomePageEvent('V2: Clicked try it for free on session container', {
                            title : currentSession.title,
                            objective : currentSession.objective,
                            ledBy : currentSession.ledByName,
                            untilNext : 59 - moment(untilNextSession).minutes()
                        });
                        const rewardfulVia = window.localStorage.getItem('via');
                        const lang = localeActive;
                        let currency;
                        const testGroupToken = window.localStorage.getItem('test_group');
                        const params = `?${(rewardfulVia ? `via=${rewardfulVia}` : '')}${(lang) ? `&lang=${lang}` : ''}${(currency) ? `&currency=${currency}${(testGroupToken) ? `&group=${testGroupToken}` : ''}` : ''}`
                        window.open(`https://app.immigo.io/pricing${params}`);
                    }}
                >
                    {tryItForFree}
                </div>
            </div>
        </div>
    );
};