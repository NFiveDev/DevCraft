import { Card } from '~/components/card';
import { Dropdown } from '~/components/dropdown';
import { FilterLink } from '~/components/link';

export default function Course() {
    return (
        <>
            <section>
                <h1 className=" text-5xl font-bold text-slate-900 pb-3">
                    Explore the courses and choose one right for you!
                </h1>
                <h4 className="text-slate-500 text-base">
                    The Web Development courses we offer are designed to help prepare you for a
                    career in front-end and back-end development, full-stack engineering, and web
                    design, providing you with comprehensive skills to build and maintain dynamic
                    websites and applications.
                </h4>
            </section>

            <section className="mt-8">
                <div className='flex justify-between items-center'>
                    <div className="flex flex-row gap-x-3">
                        <FilterLink title="Topic" path="/course" query="?CourseType=topic" />
                        <FilterLink title="Project" path="/course" query="?CourseType=project" />
                    </div>
                    <Dropdown/>
                </div>
                    
                

                <div className="grid grid-cols-3 gap-4 mt-3">
                    <div className=" col-span-3 lg:col-span-1">
                        <Card />
                    </div>
                </div>
            </section>
        </>
    );
}
