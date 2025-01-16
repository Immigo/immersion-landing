import { Mixpanel } from "@/util/mixpanel"

type HomePageEvent = 
'V2: Main landing page visited' |
'V2: Clicked start button on the jumbotron' |
'V2: Clicked try it for free on session container'


interface HomePageEventPayload {
    group ? : string,
    currency ? : string,
    lang ? : string,
    version ? : string,
    via ? : string,
    title ? : string,
    objective ? : string,
    ledBy ? : string
    untilNext ? : number
}

export function trackHomePageEvent(event : HomePageEvent, payload ? : HomePageEventPayload) {
    console.log(Mixpanel)
    Mixpanel.track(event, payload);
}