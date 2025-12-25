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
                container: [
                    "shadow-sm",
                    "bg-light-bg-ct dark:bg-dark-bg-ct",
                    "text-light-text-ct dark:text-dark-text-ct",
                    "outline-hidden ring-0",
                ],
            },
            false: {
                container: [
                    "text-light-text/70 dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text",
                    "hover:ring-2 ring-offset-1",
                    "ring-light-bg-ct/50 dark:ring-dark-bg-ct/50",
                    "ring-offset-light-bg-hg/80 dark:ring-offset-dark-bg-hg/80",
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
