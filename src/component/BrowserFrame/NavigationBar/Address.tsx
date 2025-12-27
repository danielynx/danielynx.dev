import { MdOutlineLock, MdStarOutline } from "react-icons/md";
import { tv } from "tailwind-variants";

export interface AddressProps {
    url: string;
}

const tvStyle = tv({
    slots: {
        container: [
            "flex flex-row",
            "justify-start items-center",
            "w-full",
            "py-0.5",
            "px-1 sm:px-2 md:px-3",
            "bg-black text-gray-300",
            "rounded-sm",
        ],
        icon: ["w-2 xs:w-3 sm:w-4", "h-2 xs:h-3 sm:h-4"],
        url: ["w-full", "mx-1 sm:mx-2 md:mx-3", "text-xs xs:text-sm"],
    },
});

export function Address({ url }: AddressProps) {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <MdOutlineLock className={style.icon()} />
            <div className={style.url()}>{url}</div>
            <MdStarOutline className={style.icon()} />
        </div>
    );
}
