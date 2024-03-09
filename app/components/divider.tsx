type DividerProps = {
    direction: 'vertical' | 'horizontal';
    height: string;
};

export default function Divider(props: DividerProps) {

    if (props.direction === 'horizontal') {
        return <hr className={`flex-1 border-s border-slate-600 h-7 mx-1 ${props.height}`} />
    } else {
        return <hr className="" />;
    }
}
