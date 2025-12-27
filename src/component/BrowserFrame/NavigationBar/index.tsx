import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Address } from "@/component/BrowserFrame/NavigationBar/Address";
import { Buttons } from "@/component/BrowserFrame/NavigationBar/Buttons";

const tvStyle = tv({
    base: [
        "flex flex-row",
        "justify-end items-center",
        "px-2 xs:px-3 sm:px-5 md:px-6",
        "w-full py-1",
        "bg-gray-700",
    ],
});

function NavigationBar({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}

NavigationBar.Address = Address;
NavigationBar.Buttons = Buttons;

export { NavigationBar };
