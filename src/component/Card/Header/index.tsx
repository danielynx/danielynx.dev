import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Icon } from "@/component/Card/Header/Icon";
import { Text } from "@/component/Card/Header/Text";

const tvStyle = tv({
    base: [
        "flex flex-row",
        "justify-start items-center",
        "pl-3 sm:pl-1",
        "grow",
    ],
});

function Header({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}

Header.Icon = Icon;
Header.Text = Text;

export { Header };
