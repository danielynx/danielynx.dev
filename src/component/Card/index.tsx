import Link from "next/link";
import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Icon } from "@/component/Card/Icon";
import { Text } from "@/component/Card/Text";

export interface CardProps {
    link: string;
    target?: "_blank" | "_self";
    lightBgColor?: string;
    darkTextColor?: string;
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
    link,
    target = "_self",
}: PropsWithChildren<CardProps>) {
    const style = tvStyle();

    return (
        <Link target={target} href={link}>
            <div className={style.outer()}>
                <div className={style.inner()}>{children}</div>
            </div>
        </Link>
    );
}

Card.Icon = Icon;
Card.Text = Text;

export { Card };
