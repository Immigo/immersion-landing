'use client'

import moment from "moment";
import { useEffect, useState } from "react";

const sessions = [
    {
        title : 'Applying for a job in San Francisco',
        objective : 'Learn and practice professional vocabulary',
        ledByImg : '',
        ledByName : ''
    },
    {},
    {},
    {},
    {},
    {},
    {}
]

export const SessionContainer = () => {

    const [untilNextSession, setUntilNextSession] = useState(new Date().valueOf());

    useEffect(() => {
        function pollDom() {
            setUntilNextSession(new Date().valueOf())
            console.log('lol')
        }
        const interval = setInterval(pollDom, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border border-white text-left p-6">
            <div className="font-bold text-2xl">
                Join next session!
            </div>
            <div>
                <span className="text-blue-300 font-semibold">Next immersion:</span> Applying for a job in San Francisco
            </div>
            <div>
                <span className="text-blue-300 font-semibold">Objective:</span> Learn & practice professional vocabulary
            </div>
            <div className="flex items-center mt-4">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-14 rounded-full"
                />
                <div className="ml-4">
                    <div className="font-semibold text-gray-300">
                        Led by
                    </div>
                    <div className="font-bold">
                        Meg Smith from New York 🇺🇸
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <div>
                    <div className="font-semibold">Until the next session</div>
                    <div className="text-2xl text-blue-400 font-bold">{moment(untilNextSession).format('0[h] mm[m] ss[s]')}</div>
                </div>
                <div className="text-2xl border p-4 hover:bg-white hover:text-black cursor-pointer">
                    Try it for free
                </div>
            </div>
        </div>
    );
};