import { tv } from "tailwind-variants";

const tvStyle = tv(
    {
        base: [
            "flex flex-row justify-center items-center w-full h-10",
            "font-extralight border-t",
        ],
        variants: {
            size: {
                initial: "text-xs",
                sm: "text-sm",
                md: "text-base",
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

export function CardFooter() {
    const style = tvStyle({
        size: { sm: "sm", md: "md" },
    });

    return <div className={style}>Show Details</div>;
}
