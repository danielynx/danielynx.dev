import { MdAdd } from "react-icons/md";
import { tv } from "tailwind-variants";

const tvStyle = tv(
    {
        slots: {
            container: "w-full ml-2",
            icon: "",
        },
        variants: {
            size: {
                initial: {
                    icon: "w-2 h-2",
                },
                xs: {
                    icon: "w-3 h-3",
                },
                sm: {
                    icon: "w-4 h-4",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["xs", "sm"],
    },
);

export function TitleBarAddTabButtom() {
    const style = tvStyle({
        size: { xs: "xs", sm: "sm" },
    });

    return (
        <div className={style.container()}>
            <MdAdd className={style.icon()} />
        </div>
    );
}
