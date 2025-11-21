import { tv } from "tailwind-variants";

const tvStyle = tv({
    base: ["w-full grow", "bg-light-bg dark:bg-dark-bg"],
});

export const Content = {
    style: tvStyle,
};
