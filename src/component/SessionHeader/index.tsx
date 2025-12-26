import type { IconType } from "react-icons";
import { tv } from "tailwind-variants";

export interface SessionHeaderProps {
    Icon: IconType;
    title: string;
    className?: string;
}

const tvStyle = tv({
    slots: {
        container: [
            "flex flex-row",
            "justify-start items-center",
            "mt-8 sm:mt-10",
            "mb-3 sm:mb-4",
        ],
        icon: ["h-5 sm:h-7", "w-5 sm:w-7"],
        title: [
            "text-xl sm:text-2xl",
            "ml-2 sm:ml-3",
            "font-extrabold font-serif",
        ],
    },
});

export function SessionHeader({ Icon, title, className }: SessionHeaderProps) {
    const style = tvStyle();

    return (
        <div className={style.container({ className: className })}>
            <Icon className={style.icon()} />
            <h1 className={style.title()}>{title}</h1>
        </div>
    );
}
