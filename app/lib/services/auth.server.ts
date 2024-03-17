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

        if(!validateEmail(email)) throw new Error("Invalid email")
        
        const user = await FindByEmail(email);

        return '';
    }),
    'user-pass'
);
