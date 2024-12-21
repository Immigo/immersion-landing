import mixpanel from '../../../util/mixpanel';

type HomePageEvent = 
'V2: Main landing page visited' |
'V2: Clicked start button on the jumbotron'


interface HomePageEventPayload {
    group ? : string,
    currency ? : string,
    lang ? : string,
    version ? : string,
}

export function trackHomePageEvent(event : HomePageEvent, payload ? : HomePageEventPayload) {
    mixpanel.track(event, payload);
}