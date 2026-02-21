import * as motion from "motion/react-client";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
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
            "flex flex-row items-center justify-center",
            "py-1",
            "px-2 rounded-sm",
            "first:ml-0 ml-1 last:mr-0 mr-1",
        ],
        icon: ["h-3 2xs:h-4 lg:h-5", "w-3 2xs:w-4 lg:w-5"],
        text: ["font-semibold font-mono", "pl-1", "text-xs 2xs:text-sm lg:text-base"],
    },
    variants: {
        active: {
            true: {
                container: ["bg-secondary", "text-secondary-content"],
            },
            false: {
                container: ["bg-primary", "text-primary-content"],
            },
        },
    },
});

export function Item({ text, Icon, href = "#", target = "_self" }: ItemProps) {
    const router = useRouter();
    const pathname = usePathname();
    const active = pathname === href;

    const style = tvStyle({ active });

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        router.push(href);
    };

    return active ? (
        <div className={style.container()}>
            <Icon className={style.icon()} />
            <span className={style.text()}>{text}</span>
        </div>
    ) : (
        <motion.a
            className={style.container()}
            href={href}
            target={target}
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
            }}
        >
            <Icon className={style.icon()} />
            <span className={style.text()}>{text}</span>
        </motion.a>
    );
}
