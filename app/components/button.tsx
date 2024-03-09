const CustomButtonProps = {
    variant: {
        primary: 'bg-emerald-600 hover:bg-emerald-700',
        secondary: 'bg-slate-600 hover:bg-slate-700',
        info: 'bg-sky-600 hover:bg-sky-700',
        icon: ''
    },
    size: {
        sm: 'h-7 px-3 text-sm',
        md: 'h-8 px-4 text-base',
        lg: 'h-10 px-5 text-base',
        icon: ''
    },
};

type ButtonProps = {
    children: React.ReactNode;
    size: 'sm' | 'md' | 'lg';
    variant: 'primary' | 'secondary' | 'info';
    outline?: boolean;
};

export default function Button(props: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const size = CustomButtonProps.size[props.size];
    let variant = '';

    if (props.outline) {
    } else {
        variant = CustomButtonProps.variant[props.variant];
    }

    const cls = variant + ' ' + size + ' rounded-md inline-flex flex items-center justify-center whitespace-nowrap font-medium';

    return <button className={cls}>{props.children}</button>;
}
