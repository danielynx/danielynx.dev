import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { AppContainerBody } from "@/app/_layout/container/Body";
import { sidebarStyle } from "./style";

const tvStyle = tv(
	{
		slots: {
			aside: "flex flex-col justify-start",
			sidebar: [
				"py-8 mb-3",
				"bg-light-bg-hg dark:bg-dark-bg-hg",
				"border dark:border-0 border-light-border",
				"rounded-xl shadow-xl",
			],
		},
		variants: {
			size: {
				initial: {
					aside: "items-center",
					sidebar: "mt-28",
				},
				lg: {
					aside: "items-end",
					sidebar: "mt-4",
				},
			},
		},
		defaultVariants: {
			size: "initial",
		},
	},
	{
		responsiveVariants: ["lg"],
	},
);

export function SidebarBody({ children }: PropsWithChildren) {
	const style = tvStyle({
		size: { lg: "lg" },
	});

	return (
		<aside className={style.aside({ className: AppContainerBody.style() })}>
			<div className={style.sidebar({ className: sidebarStyle() })}>
				{children}
			</div>
		</aside>
	);
}
