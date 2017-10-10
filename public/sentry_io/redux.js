import Raven from 'raven-js';

import { sentry_url, logException } from './data/config'

Raven.config(sentry_url).install()

//Following are sample error logging

//Capture something
Raven.captureMessage('Something went wrong')
//A nice form for user to report error
Raven.showReportDialog()

//Log exception with Additional data
logException(new Error('download failed!'), {
    number: '12345'
})

//forcing to throw an error
console.log(store.doesNot.never())