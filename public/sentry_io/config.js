//Note: To install raven, npm install raven-js

import Raven from 'raven-js';

const sentry_key = 'a32114b6536c40c299b55d832c91158f';
const sentry_app = '227992';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;
//Raven.config('https://a32114b6536c40c299b55d832c91158f@sentry.io/227992').install()

export function logException(ex, context) {
    Raven.captureException(ex, {
        extra: context
    });

    // Raven.context(function () {
    //     initMyApp();
    // });

    /*eslint no-console:0*/
    window && window.console && console.error && console.error(ex);
}