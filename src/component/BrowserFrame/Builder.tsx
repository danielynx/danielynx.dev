import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";

import { BrowserFrame } from "@/component/BrowserFrame";

export interface BuilderPros {
    Favicon: IconType;
    tabName: string;
    url: string;
}

export function Builder({
    Favicon,
    tabName,
    url,
    children,
}: PropsWithChildren<BuilderPros>) {
    return (
        <BrowserFrame>
            <BrowserFrame.TitleBar>
                <BrowserFrame.TitleBar.OpenTab
                    Favicon={Favicon}
                    name={tabName}
                />
                <BrowserFrame.TitleBar.AddTabButtom />
                <BrowserFrame.TitleBar.CommandButtons />
            </BrowserFrame.TitleBar>
            <BrowserFrame.NavigationBar>
                <BrowserFrame.NavigationBar.Buttons />
                <BrowserFrame.NavigationBar.Address url={url} />
            </BrowserFrame.NavigationBar>
            {children}
        </BrowserFrame>
    );
}
