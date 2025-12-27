import type { IconType } from "react-icons";
import { MdClose } from "react-icons/md";
import { tv } from "tailwind-variants";

export interface OpenTabProps {
    Favicon: IconType;
    name: string;
}

const tvStyle = tv({
    slots: {
        container: [
            "flex flex-row",
            "justify-start items-center",
            "rounded-md",
            "py-1 px-2",
            "bg-gray-700",
        ],
        circle: [
            "flex flex-row",
            "justify-center items-center",
            "w-4 sm:w-5",
            "h-4 sm:h-5",
            "rounded-full",
            "bg-teal-600",
        ],
        icon: ["w-2 xs:w-3 sm:w-4", "h-2 xs:h-3 sm:h-4"],
        name: ["pl-2 pr-8", "text-xs sm:text-sm"],
    },
});

export function OpenTab({ Favicon, name }: OpenTabProps) {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <div className={style.circle()}>
                <Favicon className={style.icon()} />
            </div>
            <div className={style.name()}>{name}</div>
            <MdClose className={style.icon()} />
        </div>
    );
}
