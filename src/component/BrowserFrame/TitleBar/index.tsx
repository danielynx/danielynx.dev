import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { AddTabButtom } from "@/component/BrowserFrame/TitleBar/AddTabButtom";
import { CommandButtons } from "@/component/BrowserFrame/TitleBar/CommandButtons";
import { OpenTab } from "@/component/BrowserFrame/TitleBar/OpenTab";

const tvStyle = tv({
    base: [
        "flex flex-row",
        "justify-start items-center",
        "bg-gray-800 text-white",
        "py-1 px-2",
    ],
});

function TitleBar({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}

TitleBar.AddTabButtom = AddTabButtom;
TitleBar.CommandButtons = CommandButtons;
TitleBar.OpenTab = OpenTab;

export { TitleBar };
