import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

export interface ContentProps {
    title: string;
    subtitle: string;
}

const tvStyle = tv({
    slots: {
        container: ["flex flex-col", "items-start", "w-full", "pl-3 lg:pl-4"],
        title: ["font-bold font-serif", "text-lg lg:text-xl"],
        subtitle: ["font-semibold font-serif", "text-base lg:text-lg"],
        children: [
            "font-extralight tracking-wide",
            "pt-2",
            "text-sm lg:text-base",
        ],
    },
});

export function Content({
    title,
    subtitle,
    children,
}: PropsWithChildren<ContentProps>) {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <div className={style.title()}>{title}</div>
            <div className={style.subtitle()}>{subtitle}</div>
            <div className={style.children()}>{children}</div>
        </div>
    );
}
