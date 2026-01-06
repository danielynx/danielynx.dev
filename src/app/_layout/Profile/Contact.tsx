import Link from "next/link";
import type { IconType } from "react-icons";
import { tv } from "tailwind-variants";

export interface ContactProps {
    Icon: IconType;
    url: string;
    text: string;
}

const tvStyle = tv({
    slots: {
        container: ["flex flex-row", "items-center", "mt-2 text-sm font-light"],
        icon: "mr-2 h-5 w-5",
    },
});

export function Contact({ Icon, url, text }: ContactProps) {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <Icon className={style.icon()} />
            <Link href={url} target={"_blank"}>
                {text}
            </Link>
        </div>
    );
}
