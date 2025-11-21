import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Header as HeaderArea } from "@/app/_layout/area/horizontal/Header";
import { Main as MainArea } from "@/app/_layout/area/vertical/Main";

const tvStyle = tv(
    {
        slots: {
            header: "flex flex-row items-end sticky",
            main: "flex flex-row items-end justify-start h-full",
        },
        variants: {
            size: {
                initial: {
                    header: "justify-center top-16",
                    main: "justify-center",
                },
                lg: {
                    header: "justify-start top-0",
                    main: "justify-start",
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

export function Navigation({ children }: PropsWithChildren) {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <header className={style.header({ className: HeaderArea.style() })}>
            <nav className={style.main({ className: MainArea.style() })}>
                {children}
            </nav>
        </header>
    );
}
