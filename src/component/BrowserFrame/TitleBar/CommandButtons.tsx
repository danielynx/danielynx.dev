import { MdClose, MdCrop54, MdRemove } from "react-icons/md";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    slots: {
        container: [
            "flex flex-row",
            "justify-start items-center",
            "mr-3 gap-2",
        ],
        circle: [
            "flex flex-row",
            "justify-center items-center",
            "w-4 sm:w-5",
            "h-4 sm:h-5",
            "rounded-full",
        ],
        icon: ["w-2 xs:w-3 sm:w-4", "h-2 xs:h-3 sm:h-4"],
    },
});

export function CommandButtons() {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <div className={style.circle({ className: "bg-green-500" })}>
                <MdRemove className={style.icon()} />
            </div>
            <div className={style.circle({ className: "bg-yellow-500" })}>
                <MdCrop54 className={style.icon()} />
            </div>
            <div className={style.circle({ className: "bg-red-500" })}>
                <MdClose className={style.icon()} />
            </div>
        </div>
    );
}
