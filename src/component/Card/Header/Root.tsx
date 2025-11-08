import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv(
	{
		base: "flex flex-row justify-start items-center grow",
		variants: {
			size: {
				initial: "pl-3",
				sm: "pl-1",
			},
		},
		defaultVariants: {
			size: "initial",
		},
	},
	{
		responsiveVariants: ["sm"],
	},
);

export function HeaderRoot({ children }: PropsWithChildren) {
	const style = tvStyle({
		size: { sm: "sm" },
	});

	return <div className={style}>{children}</div>;
}
