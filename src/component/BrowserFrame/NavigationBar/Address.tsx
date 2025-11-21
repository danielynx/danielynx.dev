import { MdOutlineLock, MdStarOutline } from "react-icons/md";
import { tv } from "tailwind-variants";

export interface NavigationBarAddressProps {
    url: string;
}

const tvStyle = tv(
    {
        slots: {
            container: [
                "flex flex-row justify-start items-center",
                "w-full py-0.5",
                "bg-black text-gray-300",
                "rounded-sm",
            ],
            icon: "",
            url: "w-full",
        },
        variants: {
            size: {
                initial: {
                    container: "px-1",
                    icon: "w-2 h-2",
                    url: "mx-1 text-xs",
                },
                xs: {
                    icon: "w-3 h-3",
                },
                sm: {
                    container: "px-2",
                    icon: "w-4 h-4",
                    url: "mx-2 text-sm",
                },
                md: {
                    container: "px-3",
                    url: "mx-3",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["xs", "sm", "md"],
    },
);

export function NavigationBarAddress({ url }: NavigationBarAddressProps) {
    const style = tvStyle({
        size: { xs: "xs", sm: "sm", md: "md" },
    });

    return (
        <div className={style.container()}>
            <MdOutlineLock className={style.icon()} />
            <div className={style.url()}>{url}</div>
            <MdStarOutline className={style.icon()} />
        </div>
    );
}
