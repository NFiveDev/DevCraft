import { useMatches } from '@remix-run/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const routesMap = new Map();
routesMap.set('/', 'dot');
routesMap.set('/course', 'course');

const GetRouteName = (path: string) => routesMap.get(path);

function BreadCrumpItem(props: {name: string}) {

    if(props.name === 'dot'){
        return <div className=''><div className='w-2 h-2 rounded-full bg-emerald-600 inline-block me-2 opacity-75'></div><span className='text-slate-600 font-semibold text-sm'>home</span></div> 
    }

    return (
        <div className=''>
            <ChevronRightIcon className=' h-4 w-4 inline text-emerald-600' /> <span className=' text-slate-600 font-semibold text-sm'>{props.name}</span>
        </div>
    );
}

export function BreadCrump() {
    const matches = useMatches();
    return (
        <div className='flex gap-x-2 items-center py-4 text-center'>
            {matches.map((match) => {
                const name = GetRouteName(match.pathname);
                return <BreadCrumpItem name={name}/>
            })}
        </div>
    );
}
