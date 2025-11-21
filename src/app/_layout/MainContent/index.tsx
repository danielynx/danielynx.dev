import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { Content as ContentArea } from "@/app/_layout/area/horizontal/Content";
import { Main as MainArea } from "@/app/_layout/area/vertical/Main";

const tvStyle = tv(
    {
        slots: {
            content: "flex flex-col justify-start",
            main: [
                "grow",
                "py-5 my-4",
                "bg-light-bg-hg dark:bg-dark-bg-hg",
                "border dark:border-0 border-light-border",
                "rounded-xl shadow-xl",
            ],
        },
        variants: {
            size: {
                initial: {
                    content: "items-center",
                },
                lg: {
                    content: "items-start",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["lg"],
    },
);

export function MainContent({ children }: PropsWithChildren) {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <div className={style.content({ className: ContentArea.style() })}>
            <main className={style.main({ className: MainArea.style() })}>
                {children}
            </main>
        </div>
    );
}
