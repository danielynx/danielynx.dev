import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv({
	base: ["border-4 border-light-border-600 dark:border-dark-border", "rounded"],
});

export function AppFrame({ children }: PropsWithChildren) {
	const style = tvStyle();

	return <div className={style}>{children}</div>;
}
