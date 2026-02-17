import * as motion from "motion/react-client";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Icon } from "@/component/Card/Icon";
import { Text } from "@/component/Card/Text";

export interface CardProps {
    href: string;
    target?: "_blank" | "_self";
}

const tvStyle = tv({
    slots: {
        outer: [
            "h-20 2xs:h-24 sm:h-26 md:h-28 lg:h-30",
            "overflow-hidden",
            "rounded-xl",
            "bg-primary",
        ],
        innerBackground: ["w-full h-full", "ml-3", "rounded-xl", "bg-surface"],
        inner: [
            "flex flex-row",
            "justify-start items-center",
            "w-full h-full",
            "p-3",
            "rounded-xl",
            "bg-primary/20",
        ],
    },
});

function Card({
    children,
    href,
    target = "_self",
}: PropsWithChildren<CardProps>) {
    const style = tvStyle();

    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
            }}
        >
            <Link target={target} href={href}>
                <div className={style.outer()}>
                    <div className={style.innerBackground()}>
                        <div className={style.inner()}>{children}</div>
                    </div>
                </div>
            </Link>
        </motion.button>
    );
}

Card.Icon = Icon;
Card.Text = Text;

export { Card };
