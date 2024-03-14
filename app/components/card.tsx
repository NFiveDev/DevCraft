import { ArrowRightStartOnRectangleIcon, CheckCircleIcon, ClockIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { LinkButton, Button } from "./button";

export function Card() {
    return (
        <div className="px-6 py-4 max-w-96 h-full mx-2 shadow-xl rounded-lg bg-neutral-50 ">
            <div className="flex flex-col-reverse lg:flex-row  w-full items-center">
                <h3 className="flex-1 text-2xl font-semibold">Python Beginner</h3>
                <img className="h-12 w-12" src="/icons/course/python.svg" alt="" />
            </div>
            <div className="flex gap-x-2 justify-center lg:justify-start pt-2 lg:pt-0">
                <div className="flex">
                    <ClockIcon className="w-4 text-sky-600"/>
                    <span className="ps-1 text-slate-400 text-sm font-bold">1:20:30</span>
                </div>
                <div className="flex">
                    <ChartBarIcon className="w-4 text-sky-600"/>
                    <span className="ps-1 text-slate-400 text-sm font-bold">beginner</span>
                </div>
            </div>
            <div className="pt-2 text-center lg:text-start">
                <p className=" text-base text-slate-500 line-clamp-4">If you’re looking for a programming language that’s flexible and easy to read, try learning Python. It’s one of the most popular languages today, and programming in Python is used for everything from web and software development to data science and analytics to quality assurance.</p>
            </div>
            
            <div className="flex gap-x-3 pt-4 justify-center lg:justify-start">
                <LinkButton variant="primary" size="sm" href="">Begin <ArrowRightStartOnRectangleIcon className="w-4"/></LinkButton>
                <Button variant="secondary" size="sm">Enroll <CheckCircleIcon className="w-4"/></Button>
            </div>
        </div>
    );
}

