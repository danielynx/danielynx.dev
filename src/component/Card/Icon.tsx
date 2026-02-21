import type { IconType } from "react-icons";
import { tv } from "tailwind-variants";

export interface IconProps {
    Icon: IconType;
}

const tvStyle = tv({
    slots: {
        container: ["px-1.5 xs:px-2 md:px-3"],
        // "text-sm 2xs:base lg:text-xl"
        icon: ["h-8 2xs:h-10 lg:h-12", "w-8 2xs:w-10 lg:w-12"],
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
