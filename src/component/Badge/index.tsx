import type { IconType } from "react-icons";
import { tv } from "tailwind-variants";

export interface BadgeProps {
    Icon: IconType;
    title: string;
}

const tvStyle = tv({
    slots: {
        container: [
            "flex flex-row",
            "items-center",
            "rounded-md",
            "px-1.5 sm:px-2",
            "py-1 sm:py-1.5",
        ],
        icon: ["h-4 sm:h-5", "w-4 sm:w-5"],
        title: [
            "text-light-text dark:text-dark-text",
            "text-sm sm:text-base",
            "ml-1 sm:ml-2",
        ],
    },
});

export function Badge({ Icon, title }: BadgeProps) {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <Icon className={style.icon()} title={title} />
            <h1 className={style.title()}>{title}</h1>
        </div>
    );
}
