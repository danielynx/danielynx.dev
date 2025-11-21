import { BrowserFrameBuilder } from "@/component/BrowserFrame/Builder";
import { BrowserFrameNavigationBar } from "@/component/BrowserFrame/NavigationBar";
import { BrowserFrameRoot } from "@/component/BrowserFrame/Root";
import { BrowserFrameTitleBar } from "@/component/BrowserFrame/TitleBar";

export const BrowserFrame = {
    Root: BrowserFrameRoot,
    NavigationBar: BrowserFrameNavigationBar,
    TitleBar: BrowserFrameTitleBar,
    Builder: BrowserFrameBuilder,
};
