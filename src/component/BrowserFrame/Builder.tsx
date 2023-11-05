import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

import { BrowserFrame } from '@/component/BrowserFrame';

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
    <BrowserFrame.Root>
      <BrowserFrame.TitleBar.Root>
        <BrowserFrame.TitleBar.OpenTab
          Favicon={Favicon}
          name={tabName}
        />
        <BrowserFrame.TitleBar.AddTabButtom />
        <BrowserFrame.TitleBar.CommandButtons />
      </BrowserFrame.TitleBar.Root>
      <BrowserFrame.NavigationBar.Root>
        <BrowserFrame.NavigationBar.Buttons />
        <BrowserFrame.NavigationBar.Address url={url} />
      </BrowserFrame.NavigationBar.Root>
      {children}
    </BrowserFrame.Root>
  );
}
