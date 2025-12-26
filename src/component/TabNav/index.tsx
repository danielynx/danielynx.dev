import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Item } from "@/component/TabNav/Item";

const tvStyle = tv({
    base: [
        "flex flex-row",
        "justify-center items-center",
        "px-2 sm:px-3 md:px-6",
        "p-1 sm:p-2",
        "h-12 sm:h-14",
    ],
});

function TabNav({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}

TabNav.Item = Item;

export { TabNav };
