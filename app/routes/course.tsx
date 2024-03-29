import { LinkButton, Button } from '~/components/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/components/card';
import { Dropdown } from '~/components/dropdown';
import { FilterLink } from '~/components/link';
import { ArrowRightCircleIcon, ClockIcon, ChartBarIcon, ArrowRightStartOnRectangleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
export default function Course() {
    return (
        <>
            <section className="flex flex-col lg:flex-row gap-7 pt-4">
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-slate-900">
                            Explore the courses and choose one right for you!
                        </h1>
                        <h4 className="text-slate-500 text-base pt-4 pe-10">
                            The Web Development courses we offer are designed to help prepare you
                            for a career in front-end and back-end development, full-stack
                            engineering, and web design, providing you with comprehensive skills to
                            build and maintain dynamic websites and applications.
                        </h4>
                    </div>
                    <div className="pt-4 flex gap-3">
                        <LinkButton size="lg" variant="primary" href="/about">
                            Guide <ArrowRightCircleIcon className="w-5 h-5" />
                        </LinkButton>
                        <LinkButton size="lg" variant="secondary" href="/about">
                            Guide <ArrowRightCircleIcon className="w-5 h-5" />
                        </LinkButton>
                    </div>
                </div>
                <img
                    src="/images/course_hero.svg"
                    alt=""
                    className="object-fill rounded-lg w-[400px]"
                />
            </section>

            <section className="mt-10">
                <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-x-3">
                        <FilterLink title="Topic" path="/course" query="?CourseType=topic" />
                        <FilterLink title="Project" path="/course" query="?CourseType=project" />
                    </div>
                    <Dropdown />
                </div>
                <div className="flex w-full justify-center pt-3">
                    <div className="grid grid-cols-3 gap-6 mt-3 ">
                        <div className=" col-span-3 lg:col-span-1">
                            <Card>
                                <CardHeader>
                                    <h3 className="flex-1 text-2xl font-semibold">
                                        Python Beginner
                                    </h3>
                                    <img
                                        className="h-12 w-12"
                                        src="/icons/course/python.svg"
                                        alt=""
                                    />
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-x-2 justify-center lg:justify-start ">
                                        <div className="flex">
                                            <ClockIcon className="w-4 text-sky-600" />
                                            <span className="ps-1 text-slate-400 text-sm font-bold">
                                                1:20:30
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <ChartBarIcon className="w-4 text-sky-600" />
                                            <span className="ps-1 text-slate-400 text-sm font-bold">
                                                beginner
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-center lg:text-start">
                                        <p className=" text-base text-slate-500 line-clamp-4">
                                            If you’re looking for a programming language that’s
                                            flexible and easy to read, try learning Python. It’s one
                                            of the most popular languages today, and programming in
                                            Python is used for everything from web and software
                                            development to data science and analytics to quality
                                            assurance.
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <LinkButton variant="primary" size="sm" href="">
                                        Begin <ArrowRightStartOnRectangleIcon className="w-4" />
                                    </LinkButton>
                                    <Button variant="secondary" size="sm">
                                        Enroll <CheckCircleIcon className="w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
