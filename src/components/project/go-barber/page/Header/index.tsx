import { MdHome, MdDeveloperBoard } from 'react-icons/md';
import { BsScissors } from 'react-icons/bs';

import { SharedContent } from '@/components/shared/Content';
import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { TabEnum } from '@/types/home/page/TabEnum';

export function PageHeader() {
  return (
    <SharedContent.Header>
      <SharedBreadcrumb.Root>
        <SharedBreadcrumb.Item
          Icon={MdHome}
          text='Home'
          selected={false}
          link='/'
        />
        <SharedBreadcrumb.Separator />
        <SharedBreadcrumb.Item
          Icon={MdDeveloperBoard}
          text='Projects'
          selected={false}
          link={`/?tab=${TabEnum.PROJECTS}`}
        />
        <SharedBreadcrumb.Separator />
        <SharedBreadcrumb.Item
          Icon={BsScissors}
          text='GoBarber'
          selected={true}
          link='/project/go-barber'
        />
      </SharedBreadcrumb.Root>
    </SharedContent.Header>
  );
}
