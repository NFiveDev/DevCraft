import type { LinksFunction } from "@remix-run/node";
import styles from "./style.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { BreadCrump } from "./components/breadcrump";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className=" font-sans flex flex-col h-screen">
        <NavBar />

        <main className="flex-auto ">
          <div className="block max-w-screen-2xl px-2 mx-auto ">
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
