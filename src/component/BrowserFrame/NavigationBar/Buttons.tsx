import { MdArrowBack, MdArrowForward, MdRefresh } from "react-icons/md";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    slots: {
        container: [
            "flex flex-row",
            "justify-start items-center",
            "w-16 xs:w-20 md:w-32",
            "pr-1 sm:pr-2",
            "gap-1 sm:gap-2 md:gap-3",
            "text-white",
        ],
        icon: ["w-3 xs:w-4 sm:w-5", "h-3 xs:h-4 sm:h-6"],
    },
});

export function Buttons() {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <MdArrowBack className={style.icon()} />
            <MdArrowForward className={style.icon()} />
            <MdRefresh className={style.icon()} />
        </div>
    );
}
