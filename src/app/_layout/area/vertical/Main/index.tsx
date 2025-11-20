import { tv } from "tailwind-variants";

const tvStyle = tv(
    {
        variants: {
            size: {
                initial: ["w-11/12", "px-3", "ml-0"],
                md: ["w-10/12", "px-5"],
                lg: ["w-11/12", "px-4", "ml-2"],
                xl: ["w-9/12", "px-5"],
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["md", "lg", "xl"],
    },
);

export const Main = {
    style: () =>
        tvStyle({
            size: { md: "md", lg: "lg", xl: "xl" },
        }),
};
