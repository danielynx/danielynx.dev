import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { NavigationBar } from "@/component/BrowserFrame/NavigationBar";
import { TitleBar } from "@/component/BrowserFrame/TitleBar";

const tvStyle = tv({
    base: ["flex flex-col", "border-4 border-outline", "rounded-sm"],
});

function BrowserFrame({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}

BrowserFrame.NavigationBar = NavigationBar;
BrowserFrame.TitleBar = TitleBar;

export { BrowserFrame };
