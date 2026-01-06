import { TbHandStop } from "react-icons/tb";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    slots: {
        container: [
            "flex flex-col",
            "items-center justify-center",
            "grow h-full",
        ],
        icon: [
            "mt-2 sm:mt-8 lg:mt-20",
            "h-28 sm:h-32 lg:h-40",
            "w-28 sm:w-32 lg:w-40",
        ],
        ask: [
            "font-bold",
            "mt-4 sm:mt-10 lg:mt-20",
            "text-lg sm:text-xl lg:text-3xl",
        ],
        message: [
            "font-bold",
            "mt-1 sm:mt-2 lg:mt-4",
            "text-lg sm:text-xl lg:text-3xl",
        ],
    },
});

export default function NotFound() {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <TbHandStop className={style.icon()} />
            <p className={style.ask()}>Where did you want to go? 🤔</p>
            <p className={style.message()}>There {`isn't`} this page.</p>
        </div>
    );
}
