import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { Navigator } from "@/component/Navigator";

const tvStyle = tv(
    {
        base: "",
        variants: {
            size: {
                initial: "px-2",
                sm: "px-3",
                md: "px-6",
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["sm", "md"],
    },
);

export function BreadcrumbRoot({ children }: PropsWithChildren) {
    const navigatorPainelStyle = Navigator.style.painel();

    const style = tvStyle({ size: { sm: "sm", md: "md" } });

    return (
        <div
            className={navigatorPainelStyle.container({
                className: style,
            })}
        >
            {children}
        </div>
    );
}
