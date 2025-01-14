'use client'

import moment from "moment";
import { useEffect, useState } from "react";

const sessions = [
    {
        title : 'Applying for a Job in San Francisco',
        objective : 'Learn how to effectively apply for a job in San Francisco by crafting a tailored resume, writing a compelling cover letter, and navigating local hiring practices',
        ledByImg : 'https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/profile_pictures%2FAGzmCyvq9qay5V40EykRJ9f9LTp1_profile_picture?alt=media&token=98a3ac1b-0dba-4cfd-ab75-db7073d124ab',
        ledByName : 'Andrea from San Francisco 🇺🇸'
    },
    {
        title : 'Going on a Date in Los Angeles',
        objective : 'Prepare for a successful date in Los Angeles by learning conversational tips, cultural nuances, and etiquette to make a great impression.',
        ledByImg : 'https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/profile_pictures%2F6gBeRoW9jDVMGIQpr4UOjSwtFc52_profile_picture?alt=media&token=56e6901e-4992-44ee-8dd7-dfbb126fb4b4',
        ledByName : 'Meg from Los Angeles 🇺🇸'
    },
    {
        title : 'Ordering in a Coffee Shop in New York',
        objective : 'Gain confidence in ordering at a coffee shop in New York by practicing common phrases, menu vocabulary, and polite interactions.',
        ledByImg : 'https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/profile_pictures%2FoBFXnnz4o4VOI3g7ywmzereys5g1_profile_picture?alt=media&token=dad7446e-f7b3-4d9b-8587-f9ea50be5b70',
        ledByName : 'Matthew from Miami 🇺🇸'
    },
    {
        title : 'Introducing Yourself to New Colleagues in Chicago',
        objective : 'Build confidence in introducing yourself to new colleagues in Chicago by practicing professional greetings, small talk, and workplace etiquette.',
        ledByImg : 'https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/profile_pictures%2FAGzmCyvq9qay5V40EykRJ9f9LTp1_profile_picture?alt=media&token=98a3ac1b-0dba-4cfd-ab75-db7073d124ab',
        ledByName : 'Andrea from San Francisco 🇺🇸'
    },
    {
        title : 'Attending a Party in Miami',
        objective : 'Feel confident attending a party in Miami by learning conversational icebreakers, cultural norms, and tips for engaging in social interactions.',
        ledByImg : 'https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/profile_pictures%2F6gBeRoW9jDVMGIQpr4UOjSwtFc52_profile_picture?alt=media&token=56e6901e-4992-44ee-8dd7-dfbb126fb4b4',
        ledByName : 'Meg from Los Angeles 🇺🇸'
    },
    {
        title : 'Attending a Networking Event in Seattle',
        objective : 'Master the skills to confidently attend a networking event in Seattle by learning how to introduce yourself, engage in meaningful conversations, and make lasting professional connections.',
        ledByImg : 'https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/profile_pictures%2FoBFXnnz4o4VOI3g7ywmzereys5g1_profile_picture?alt=media&token=dad7446e-f7b3-4d9b-8587-f9ea50be5b70',
        ledByName : 'Matthew from Miami 🇺🇸'
    },
    {
        title : 'Conversing with Your Neighbors in Orange County',
        objective : 'Develop confidence in conversing with your neighbors in Orange County by practicing friendly greetings, small talk, and community-focused topics.',
        ledByImg : 'https://firebasestorage.googleapis.com/v0/b/immigo-application-8ba25.appspot.com/o/profile_pictures%2F6gBeRoW9jDVMGIQpr4UOjSwtFc52_profile_picture?alt=media&token=56e6901e-4992-44ee-8dd7-dfbb126fb4b4',
        ledByName : 'Meg from Los Angeles 🇺🇸'
    }
]

export const SessionContainer = () => {

    const [untilNextSession, setUntilNextSession] = useState(new Date().valueOf());
    const [currentSession, setCurrentSession] = useState(sessions[Math.round(moment().hours() % 7)]);


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
                Join next session!
            </div>
            <div>
                <span className="text-blue-300 font-semibold">Next immersion:</span> {currentSession.title}
            </div>
            <div>
                <span className="text-blue-300 font-semibold">Objective:</span> {currentSession.objective}
            </div>
            <div className="flex items-center mt-4">
                <img
                    alt=""
                    src={currentSession.ledByImg}
                    className="inline-block size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                    <div className="font-semibold text-gray-300">
                        Led by
                    </div>
                    <div className="font-bold">
                        {currentSession.ledByName}
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <div>
                    <div className="font-semibold">Until the next session</div>
                    <div className="text-2xl text-blue-400 font-bold">{`0h ${59 - moment(untilNextSession).minutes()}m ${59 - moment(untilNextSession).seconds()}s`}</div>
                </div>
                <div className="border hover:bg-white hover:text-black cursor-pointer text-center md:text-2xl text-md md:p-4 p-2 flex items-center">
                    Try it for free
                </div>
            </div>
        </div>
    );
};