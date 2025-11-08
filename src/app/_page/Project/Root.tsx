import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { Tab } from "@/component/Tab";

const tvStyle = tv(
    {
        base: "grid m-2",
        variants: {
            size: {
                initial: "grid-cols-1 gap-4",
                sm: "grid-cols-2",
                xl: "gap-5",
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["sm", "xl"],
    },
);

export function ProjectRoot({ children }: PropsWithChildren) {
    const style = tvStyle({
        size: { sm: "sm", xl: "xl" },
    });

    return (
        <Tab.Panel>
            <div className={style}>{children}</div>
        </Tab.Panel>
    );
}
