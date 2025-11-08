import { Tab, type TabPanelsProps } from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv({
	base: "grow",
});

export function TabPanels({
	children,
	className,
	...props
}: PropsWithChildren<TabPanelsProps<ElementType>>) {
	const style = tvStyle({ className });

	return (
		<Tab.Panels className={style} {...props}>
			{children}
		</Tab.Panels>
	);
}
