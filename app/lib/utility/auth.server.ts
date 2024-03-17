import { Authenticator } from 'remix-auth';
import { sessionStorage } from './auth.session';

export let authenticator = new Authenticator<string>(sessionStorage);
