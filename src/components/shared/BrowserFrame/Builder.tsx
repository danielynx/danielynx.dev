import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

import { SharedBrowserFrame } from '@/components/shared/BrowserFrame';

export interface BrowserFrameBuilderPros {
  Favicon: IconType;
  tabName: string;
  url: string;
}

export function BrowserFrameBuilder({
  Favicon,
  tabName,
  url,
  children,
}: PropsWithChildren<BrowserFrameBuilderPros>) {
  return (
    <SharedBrowserFrame.Root>
      <SharedBrowserFrame.TitleBar.Root>
        <SharedBrowserFrame.TitleBar.OpenTab
          Favicon={Favicon}
          name={tabName}
        />
        <SharedBrowserFrame.TitleBar.AddTabButtom />
        <SharedBrowserFrame.TitleBar.CommandButtons />
      </SharedBrowserFrame.TitleBar.Root>
      <SharedBrowserFrame.NavigationBar.Root>
        <SharedBrowserFrame.NavigationBar.Buttons />
        <SharedBrowserFrame.NavigationBar.Address url={url} />
      </SharedBrowserFrame.NavigationBar.Root>
      {children}
    </SharedBrowserFrame.Root>
  );
}
