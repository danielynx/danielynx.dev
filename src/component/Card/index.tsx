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
            "h-38",
            "overflow-hidden",
            "rounded-3xl",
            "border-2 border-outline",
            "bg-primary",
        ],
        inner: [
            "flex flex-row",
            "justify-start items-center",
            "w-full h-full",
            "ml-3",
            "p-3",
            "rounded-3xl",
            "bg-surface",
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                mass: 0.5,
            }}
        >
            <Link target={target} href={href}>
                <div className={style.outer()}>
                    <div className={style.inner()}>{children}</div>
                </div>
            </Link>
        </motion.button>
    );
}

Card.Icon = Icon;
Card.Text = Text;

export { Card };
