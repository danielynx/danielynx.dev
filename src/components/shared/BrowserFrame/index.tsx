import { BrowserFrameRoot } from './Root';
import { BrowserFrameNavigationBar } from './NavigationBar';
import { BrowserFrameTitleBar } from './TitleBar';
import { BrowserFrameBuilder } from './Builder';

export const SharedBrowserFrame = {
  Root: BrowserFrameRoot,
  NavigationBar: BrowserFrameNavigationBar,
  TitleBar: BrowserFrameTitleBar,
  Builder: BrowserFrameBuilder,
};
