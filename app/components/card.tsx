export function Card() {
    return (
        <div className="p-5 h-64 shadow-lg rounded-lg bg-gray-50">
            <div className="flex flex-row  w-full items-center">
                <h3 className="flex-1 text-2xl font-semibold">Python Beginner</h3>
                <img className="h-12 w-12" src="/icons/course/python.svg" alt="" />
            </div>
            <div className="pt-2">
                <p className=" text-base text-slate-500">If you’re looking for a programming language that’s flexible and easy to read, try learning Python. It’s one of the most popular languages today, and programming in Python is used for everything from web and software development to data science and analytics to quality assurance.</p>
            </div>
        </div>
    );
}
