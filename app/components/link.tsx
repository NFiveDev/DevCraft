import { Link, useLocation } from '@remix-run/react';

type FilterLinkProps = {
    title: string;
    path: string;
    query: string;
};

export function FilterLink(props: FilterLinkProps) {
    const location = useLocation();
    const activeCls = 'border-emerald-600';
    const inActiveCls = 'border-slate-600';
    let activeState = location.search.toLowerCase() === props.query.toLowerCase() ? activeCls : inActiveCls;

    return (
        <Link to={{ pathname: props.path, search: props.query }}>
            <div className={"border-2 text-sm font-semibold py-1 px-2 rounded-lg " + activeState}>
                <span>{props.title}</span>
            </div>
        </Link>
    );
}
