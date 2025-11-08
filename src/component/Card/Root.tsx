import type { PropsWithChildren } from "react";
import Link from "next/link";
import { tv } from "tailwind-variants";

export interface CardRootProps {
	link: string;
	target?: "_blank" | "_self";
	lightBgColor?: string;
	darkTextColor?: string;
}

const tvStyle = tv({
	base: [
		"flex flex-col justify-center",
		"rounded-md overflow-hidden h-40",
		"dark:bg-dark-bg-ct",
		"hover:ring-4 ring-offset-4",
		"ring-light-bg-ct/50 dark:ring-dark-bg-ct/50",
		"ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg",
	],
});

export function CardRoot({
	children,
	link,
	target = "_self",
	lightBgColor = "bg-light-bg-ct",
	darkTextColor = "dark:text-dark-text-ct",
}: PropsWithChildren<CardRootProps>) {
	const style = tvStyle({
		className: [
			lightBgColor,
			"dark:bg-dark-bg-ct",
			"text-light-text-ct",
			darkTextColor,
		],
	});

	return (
		<Link target={target} href={link}>
			<div className={style}>{children}</div>
		</Link>
	);
}
