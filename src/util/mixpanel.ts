import mixpanel from 'mixpanel-browser';

// For full MixPanel reference goto:
// https://developer.mixpanel.com/docs/javascript-full-api-reference
mixpanel.init('512ae69c1a5a22b93100463114c7bb0a', {
    cross_subdomain_cookie: true,
});

console.log(mixpanel)

export const Mixpanel = mixpanel;