import { MdToday } from "react-icons/md";
import { tv } from "tailwind-variants";

export interface TimeProps {
    date: string;
}

const tvStyle = tv({
    slots: {
        container: ["flex flex-col", "items-end justify-start", "w-24 lg:w-30"],
        timeBar: ["flex flex-row", "items-center justify-start"],
        badge: [
            "flex flex-row",
            "items-center justify-start",
            "bg-secondary",
            "text-secondary-content",
            "rounded-md",
            "font-mono font-bold",
            "pl-1 lg:pl-2",
            "text-xs lg:text-sm",
            "h-5",
            "w-16 lg:w-20",
            "mr-2 lg:mr-3",
        ],
        icon: ["h-4", "w-4", "mr-1 lg:mr-2"],
        dot: [
            "bg-secondary",
            "rounded-full",
            "ring-2 ring-secondary",
            "ring-offset-2 ring-offset-secondary-content",
            "h-2 lg:h-3",
            "w-2 lg:w-3",
        ],
        line: [
            "bg-secondary",
            "grow",
            "rounded-full",
            "w-2 lg:w-3",
            "mt-1 lg:mt-2",
        ],
    },
});

export function Time({ date }: TimeProps) {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <div className={style.timeBar()}>
                <div className={style.badge()}>
                    <MdToday className={style.icon()} />
                    {date}
                </div>
                <div className={style.dot()} />
            </div>
            <div className={style.line()} />
        </div>
    );
}
