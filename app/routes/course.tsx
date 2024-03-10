import { Card } from "~/components/card";

export default function Course() {
    return <>
    <section>
        <h1 className=" text-5xl font-bold text-slate-900 pb-3">Explore a range of courses and choose one right for you!</h1>
        <h4 className="text-slate-500 text-base">The Web Development courses we offer are designed to help prepare you for a career in front-end and back-end development, full-stack engineering, and web design, providing you with comprehensive skills to build and maintain dynamic websites and applications.</h4>
    </section>

    <section className="grid grid-cols-3 gap-4">
        <div className=" col-span-3 lg:col-span-1">
            <Card />
        </div>
    </section>
    </>
}