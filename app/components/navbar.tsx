import { useState } from "react";
import { AcademicCapIcon, ArchiveBoxIcon, QuestionMarkCircleIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const openCls = open ? 'mt-[50px]' : '-mt-72'

  return (
    <header className=" bg-slate-800 sticky top-0">
      <div className="flex h-[50px] justify-between items-center max-w-screen-2xl mx-auto px-3 2xl:px-0">
        <div>
          <h3 className="text-white text-xl">DevCraft</h3>
        </div>
        <button onClick={() => setOpen(!open)} className={`static lg:hidden ${open === true ? 'border-slate-200 border rounded-md' : ''} `}><Bars3Icon  className="text-emerald-500 h-8 w-8 "/></button>
        <nav className={`text-white absolute lg:static top-0 lg:mt-0 -z-10 left-0 right-0 duration-500 ease-in-out bg-slate-800 ${openCls}`}>
          <ul className="flex flex-col pt-4 pb-8 lg:py-0 gap-4 lg:flex-row ms-8 lg:ms-0">
            <li className="text-xl lg:text-base"><a href="/courses"><AcademicCapIcon className="me-4 text-emerald-500 inline h-7 w-7 lg:hidden"/> courses</a></li>
            <li className="text-xl lg:text-base"><a href="/courses"><ArchiveBoxIcon className="me-4 text-emerald-500 inline h-7 w-7 lg:hidden"/> resources</a></li>
            <li className="text-xl lg:text-base"><a href="/courses"><QuestionMarkCircleIcon className="me-4 text-emerald-500 inline h-7 w-7 lg:hidden"/> about</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
