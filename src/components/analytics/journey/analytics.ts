import { Mixpanel } from '../../../util/mixpanel';

type JourneyPageEvent = 
'V2: Visited journey page' |
'V2: Clicked a journey'


interface JourneyPageEventPayload {
    group ? : string,
    currency ? : string,
    lang ? : string,
    version ? : string,
    journey ? : string,
    picOrCard ? : 'pic' | 'card'
}

export function trackJourneyPageEvent(event : JourneyPageEvent, payload ? : JourneyPageEventPayload) {
    Mixpanel.track(event, payload);
}