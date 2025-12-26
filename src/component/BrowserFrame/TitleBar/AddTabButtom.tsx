import { MdAdd } from "react-icons/md";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    slots: {
        container: "w-full ml-2",
        icon: ["w-2 xs:w-3 sm:w-4", "h-2 xs:h-3 sm:h-4"],
    },
});

export function AddTabButtom() {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <MdAdd className={style.icon()} />
        </div>
    );
}
