import mixpanel from 'mixpanel-browser';

// For full MixPanel reference goto:
// https://developer.mixpanel.com/docs/javascript-full-api-reference
if (process.env.NODE_ENV === 'production') {
  mixpanel.init('512ae69c1a5a22b93100463114c7bb0a', {
    cross_subdomain_cookie: true,
  });
} else {
  // use the old Immigo project in development
  // https://mixpanel.com/project/2306904/app/settings#project/2306904
  mixpanel.init('8eb8e2fe390ade698ebcabdee90948a6', {
    cross_subdomain_cookie: true,
  });
}

export default mixpanel;