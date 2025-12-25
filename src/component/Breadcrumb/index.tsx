import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Item } from "@/component/Breadcrumb/Item";
import { Separator } from "@/component/Breadcrumb/Separator";

const tvStyle = tv({
    base: [
        "flex flex-row justify-center items-center",
        "px-2 sm:px-3 md:px-6",
        "p-1 sm:p-2",
        "h-12 sm:h-14",
    ],
});

function Breadcrumb({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}

Breadcrumb.Item = Item;
Breadcrumb.Separator = Separator;

export { Breadcrumb };
