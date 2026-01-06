import type { IconType } from "react-icons";
import { tv } from "tailwind-variants";

export interface IconProps {
    Icon: IconType;
}

const tvStyle = tv({
    slots: {
        container: ["px-1.5 xs:px-2 md:px-3"],
        icon: ["h-8 xs:h-10 sm:h-12 md:h-14", "w-8 xs:w-10 sm:w-12 md:w-14"],
    },
});

export function Icon({ Icon }: IconProps) {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <Icon className={style.icon()} />
        </div>
    );
}
