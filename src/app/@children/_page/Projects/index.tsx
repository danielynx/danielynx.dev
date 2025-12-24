import { tv } from "tailwind-variants";
import { DanielPortfolio } from "@/app/@children/_page/Projects/DanielPortfolio";
import { GoBarber } from "@/app/@children/_page/Projects/GoBarber";

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

export function Projects() {
    const style = tvStyle({
        size: { sm: "sm", xl: "xl" },
    });

    return (
        <div className={style}>
            <DanielPortfolio />
            <GoBarber />
        </div>
    );
}
