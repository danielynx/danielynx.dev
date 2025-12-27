import { MdChevronRight } from "react-icons/md";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    base: [
        "text-light-text/70 dark:text-dark-text/70",
        "h-4 xs:h-5 2xs:h-6 sm:h-7 md:h-8",
        "w-4 xs:w-5 2xs:w-6 sm:w-7 md:w-8",
    ],
});

export function Separator() {
    const style = tvStyle();

    return <MdChevronRight className={style} />;
}
