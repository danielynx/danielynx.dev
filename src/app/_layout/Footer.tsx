import { tv } from 'tailwind-variants';

const tvStyle = tv(
  {
    slots: {
      footer: [
        'flex justify-center items-center',
        'w-full',
        'border-t dark:border-0 border-light-border',
        'bg-light-bg dark:bg-dark-bg-hg-600',
      ],
      username:
        'font-bold underline decoration-indigo-500 decoration-2 underline-offset-2',
      technology: 'font-bold',
    },
    variants: {
      size: {
        initial: {
          footer: 'flex-col text-xs gap-1 py-3',
        },
        sm: {
          footer: 'flex-row text-sm py-4',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm'],
  },
);

export function AppFooter() {
  const style = tvStyle({
    size: { sm: 'sm' },
  });

  return (
    <footer className={style.footer()}>
      <div>
        <span className={style.username()}>@danielynx</span>
        &nbsp; building software since 2010,
      </div>
      <div>
        using &nbsp;
        <span className={style.technology()}>PHP</span>
        &nbsp; and &nbsp;
        <span className={style.technology()}>JavaScript</span>
        &nbsp; 🕵️‍♂️
      </div>
    </footer>
  );
}
