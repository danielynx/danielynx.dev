import { BrowserFrameBuilder } from "./Builder";
import { BrowserFrameNavigationBar } from "./NavigationBar";
import { BrowserFrameRoot } from "./Root";
import { BrowserFrameTitleBar } from "./TitleBar";

export const BrowserFrame = {
    Root: BrowserFrameRoot,
    NavigationBar: BrowserFrameNavigationBar,
    TitleBar: BrowserFrameTitleBar,
    Builder: BrowserFrameBuilder,
};
