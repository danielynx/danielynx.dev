import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { DanielPortfolio } from "./DanielPortfolio";
import { GoBarber } from "./GoBarber";

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

function index({ children }: PropsWithChildren) {
    const style = tvStyle({
        size: { sm: "sm", xl: "xl" },
    });

    return <div className={style}>{children}</div>;
}

export const Project = Object.assign(index, {
    DanielPortfolio,
    GoBarber,
});
