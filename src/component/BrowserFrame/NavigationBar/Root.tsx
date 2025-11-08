import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv(
	{
		base: [
			"flex flex-row justify-end items-center",
			"w-full py-1",
			"bg-gray-700",
		],
		variants: {
			size: {
				initial: "px-2",
				xs: "px-3",
				sm: "px-5",
				md: "px-6",
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

export function NavigationBarRoot({ children }: PropsWithChildren) {
	const style = tvStyle({
		size: { xs: "xs", sm: "sm", md: "md" },
	});

	return <div className={style}>{children}</div>;
}
