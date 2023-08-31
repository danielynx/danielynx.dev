import { TabEnum } from '@/types/home/page/TabEnum';
import { BodyItem } from './Item';

export function BodyOverview() {
  return (
    <BodyItem.Root tab={TabEnum.OVERVIEW}>
      <div className='leading-loose'>
        <p>Hi there, I&apos;m Daniel B.K</p>
        <p>👨‍🎓 Computing Scientist</p>
        <p>
          💻 Developing with PHP (Symfony Framework) and Javascript for many
          years (6+)
        </p>
        <p>📜 Currently studying NodeJS, React JS and React Native</p>
        <p>
          🔥 I&apos;m also a Blockchain and Decentralized System enthusiast,
          technologies that will be my next study aim
        </p>
      </div>
    </BodyItem.Root>
  );
}
