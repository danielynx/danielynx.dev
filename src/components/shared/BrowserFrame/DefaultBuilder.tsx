import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

import { SharedBrowserFrame } from '@/components/shared/BrowserFrame';

export interface BrowserFrameDefaultBuilderPros {
  Favicon: IconType;
  tabName: string;
  url: string;
}

export function BrowserFrameDefaultBuilder({
  Favicon,
  tabName,
  url,
  children,
}: PropsWithChildren<BrowserFrameDefaultBuilderPros>) {
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
