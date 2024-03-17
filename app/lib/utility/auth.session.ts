import { createCookieSessionStorage } from '@remix-run/node';

const sessionSecret = process.env.SESSION_SECRET;

if(!sessionSecret) {
    throw new Error("You must set a session secret env variable")
}

export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: 'session',
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
        secrets: [sessionSecret],
        secure: process.env.NODE_ENV === 'production',
    },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
