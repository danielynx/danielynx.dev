import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    base: [
        "flex flex-row",
        "justify-start",
        "grow",
        "text-base sm:text-lg xl:text-xl 2xl:text-2xl",
        "font-serif",
    ],
});

export function Text({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}
