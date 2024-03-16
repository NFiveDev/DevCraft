import {
    ArrowRightStartOnRectangleIcon,
    CheckCircleIcon,
    ClockIcon,
    ChartBarIcon,
} from '@heroicons/react/24/solid';
import { LinkButton, Button } from './button';


export function Card(props: { children: React.ReactNode }) {
    return (
        <div className="px-6 py-4 max-w-96 h-full mx-2 shadow-xl rounded-lg bg-neutral-50 ">
            {props.children}
        </div>
    );
}

export function CardHeader(props: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col-reverse lg:flex-row  w-full items-center">
            {props.children}
        </div>
    );
}

export function CardContent(props: { children: React.ReactNode }) {
    return <div className='flex flex-col'>{props.children}</div>;
}

export function CardFooter(props: { children: React.ReactNode }) {
    return (
        <div className='flex gap-x-3 pt-4 justify-center lg:justify-start'>{props.children}</div>
    )
}
