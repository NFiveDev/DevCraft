import { Authenticator } from 'remix-auth';
import { sessionStorage } from './auth.session';
import { FormStrategy } from 'remix-auth-form';
import { FindByEmail } from './user';
import { validateEmail } from '../utility/validators';

export let authenticator = new Authenticator<string>(sessionStorage);

authenticator.use(
    new FormStrategy(async ({ form }) => {
        let email = form.get('email') as string;
        let password = form.get('password');

        if (!validateEmail(email)) throw new Error('Invalid email');

        const user = await FindByEmail(email);

        if (!user || user.email.length < 1) throw new Error('Could not find user');

        return '';
    }),
    'user-pass'
);
