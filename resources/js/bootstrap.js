import "./alotimer/alotimer.min.js"

import _ from 'lodash';
import $ from 'jquery';
import 'select2'; // This imports select2 for side effects (e.g., jQuery plugin registration)
import Dropzone from 'dropzone';

window._ = _;
window.$ = window.jQuery = $;
window.Dropzone = Dropzone;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// try {
    // window.$ = window.jQuery = require('jquery');
    // require('select2')
    // window.Dropzone = require('dropzone').default
    // require('flatpickr')
// } catch (e) { console.log ('Error thrown in bootstrap.js: ' + e.message)}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    scheme: import.meta.env.VITE_PUSHER_SCHEME,
    wsHost: import.meta.env.VITE_PUSHER_HOST,
    wsPort: import.meta.env.VITE_PUSHER_PORT,
    wssPort: import.meta.env.VITE_PUSHER_PORT,
    enabledTransports: ['ws', 'wss'],
    // wssPort: 6001, // SSL https://beyondco.de/docs/laravel-websockets/basic-usage/ssl
    encrypted: false,
    forceTLS: false,
    disableStats: true,
});