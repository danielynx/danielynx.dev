import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv(
	{
		base: "flex flex-row justify-start grow font-serif",
		variants: {
			size: {
				initial: "text-base",
				xs: "text-lg",
				sm: "text-xl",
				md: "text-2xl",
			},
		},
		defaultVariants: {
			size: "initial",
		},
	},
	{
		responsiveVariants: ["xs", "sm", "md"],
	},
);

export function HeaderText({ children }: PropsWithChildren) {
	const style = tvStyle({
		size: { xs: "xs", sm: "sm", md: "md" },
	});

	return <div className={style}>{children}</div>;
}
