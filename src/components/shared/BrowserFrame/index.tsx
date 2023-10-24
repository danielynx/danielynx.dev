import { BrowserFrameRoot } from './Root';
import { BrowserFrameNavigationBar } from './NavigationBar';
import { BrowserFrameTitleBar } from './TitleBar';
import { BrowserFrameDefaultBuilder } from './DefaultBuilder';

export const SharedBrowserFrame = {
  Root: BrowserFrameRoot,
  NavigationBar: BrowserFrameNavigationBar,
  TitleBar: BrowserFrameTitleBar,
  DefaultBuilder: BrowserFrameDefaultBuilder,
};
