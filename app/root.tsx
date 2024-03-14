import type { LinksFunction } from '@remix-run/node';
import styles from './style.css';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { BreadCrump } from './components/breadcrump';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: styles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
        type: 'text/css',
    },
];

export default function App() {
    return (
        <html lang="en" className="h-full">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="font-ubuntu flex flex-col h-screen text-[16px]">
                <NavBar />

                <main className="flex-auto bg-slate-100 ">
                    <div className="block max-w-screen-xl px-5  mx-auto ">
                        <BreadCrump />
                        <Outlet />
                        <ScrollRestoration />
                        <Scripts />
                        <LiveReload />
                    </div>
                </main>

                <Footer />
            </body>
        </html>
    );
}
