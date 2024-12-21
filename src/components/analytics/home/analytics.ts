import { Mixpanel } from "@/util/mixpanel"

type HomePageEvent = 
'V2: Main landing page visited' |
'V2: Clicked start button on the jumbotron'


interface HomePageEventPayload {
    group ? : string,
    currency ? : string,
    lang ? : string,
    version ? : string,
    via ? : string
}

export function trackHomePageEvent(event : HomePageEvent, payload ? : HomePageEventPayload) {
    console.log(Mixpanel)
    Mixpanel.track(event, payload);
}