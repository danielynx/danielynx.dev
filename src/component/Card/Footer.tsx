import { tv } from "tailwind-variants";

const tvStyle = tv({
    base: [
        "flex flex-row",
        "justify-center items-center",
        "w-full h-10",
        "text-xs sm:text-sm md:text-base",
        "font-extralight border-t",
    ],
});

export function Footer() {
    const style = tvStyle();

    return <div className={style}>Show Details</div>;
}
