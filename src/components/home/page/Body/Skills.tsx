import { TabEnum } from '@/types/home/page/TabEnum';
import { BodyItem } from './Item';

export function BodySkills() {
  return (
    <BodyItem.Root tab={TabEnum.SKILLS}>
      <h4>Skills</h4>
    </BodyItem.Root>
  );
}
