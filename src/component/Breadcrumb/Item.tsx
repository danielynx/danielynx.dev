import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import { tv } from "tailwind-variants";

export interface ItemProps {
    text: string;
    Icon: IconType;
    href?: string;
    target?: "_blank" | "_self";
}

const tvStyle = tv({
    slots: {
        container: [
            "flex flew-row items-center justify-center",
            "py-1",
            "px-2 rounded-lg",
            "first:ml-0 ml-1 last:mr-0 mr-1",
        ],
        icon: ["h-4 xs:h-5 sm:h-6 md:h-7", "w-4 xs:w-5 sm:w-6 md:w-7"],
        text: [
            "font-semibold font-mono",
            "pl-1 sm:pl-1.5 md:pl-2",
            "text-xs xs:text-sm 2xs:text-base sm:text-lg",
        ],
    },
    variants: {
        active: {
            true: {
                container: ["bg-secondary", "text-secondary-content"],
            },
            false: {
                container: [
                    "bg-primary",
                    "text-primary-content/80 hover:text-primary-content",
                ],
            },
        },
    },
});

export function Item({ text, Icon, href = "#", target = "_self" }: ItemProps) {
    const pathname = usePathname();
    const active = pathname === href;

    const style = tvStyle({ active });

    return (
        <Link className={style.container()} href={href} target={target}>
            <Icon className={style.icon()} />
            <span className={style.text()}>{text}</span>
        </Link>
    );
}
