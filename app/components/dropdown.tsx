import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';

type DropDownProps = {
    label: string;
    selectedValue: string;
};

export function Dropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative ease-in-out duration-500"
            tabIndex={0}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(true)}
        >
            <span className="text-sm font-medium text-slate-600">
                sort by div{' '}
                <ChevronDownIcon
                    className={`w-6 h-6 inline-block text-emerald-600 ${
                        open === true ? 'rotate-180' : ''
                    }`}
                />
            </span>

            {open && (
                <div className="absolute shadow-md min-w-32 right-0 me-2 rounded-md">
                    <ul className="flex flex-col my-2  mx-2">
                        <li className="hover:bg-slate-100 py-1 px-2 text-sm font-light rounded-md">
                            option 1
                        </li>
                        <li className="hover:bg-slate-100 py-1 px-2 text-sm font-light rounded-md">
                            option 1
                        </li>
                        <li className="hover:bg-slate-100 py-1 px-2 text-sm font-light rounded-md">
                            option 1
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
