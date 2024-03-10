import { useState } from 'react';
import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';
import Button from './button';
import Divider from './divider';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const openCls = open ? 'mt-[50px]' : '-mt-72';

  return (
    <header className=' bg-slate-800 sticky top-0'>
      <div className='flex h-[50px] justify-between items-center max-w-screen-xl mx-auto px-3 2xl:px-0 relative bg-slate-800'>
        <div className='flex items-center'>
          <img src="/anvil.png" className='h-6 w-6 me-2' alt="" />
          <h3 className='text-white text-xl inline font-bold'>Dev<span className='text-emerald-400'>Craft</span> </h3>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`static lg:hidden ${
            open === true ? 'border-slate-200 border rounded-md' : ''
          } `}
        >
          <Bars3Icon className='text-emerald-500 h-8 w-8 ' />
        </button>
        <nav
          className={`text-white absolute lg:static top-0 lg:mt-0 -z-10 lg:z-0 left-0 right-0 duration-200 ease-in-out bg-slate-800 ${openCls}`}
        >
          <ul className='flex flex-col pt-4 pb-8 lg:py-0 gap-4 lg:flex-row ms-8 lg:ms-0 lg:items-center lg:font-semibold'>
            <li className='text-xl lg:text-sm  '>
              <a href='/course'>
                <AcademicCapIcon className='me-4 text-emerald-500 inline h-7 w-7 lg:hidden' />{' '}
                courses
              </a>
            </li>
            <li className='text-xl lg:text-sm'>
              <a href='/courses'>
                <ArchiveBoxIcon className='me-4 text-emerald-500 inline h-7 w-7 lg:hidden' />{' '}
                resources
              </a>
            </li>
            <li className='text-xl lg:text-sm'>
              <a href='/courses'>
                <QuestionMarkCircleIcon className='me-4 text-emerald-500 inline h-7 w-7 lg:hidden' />{' '}
                about
              </a>
            </li>
            <Divider direction='horizontal' height='h-7' />
            <li className=' '>
              <div className=''>
                <Button size='sm' variant='info'>
                  <span>Get Started</span>
                </Button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
