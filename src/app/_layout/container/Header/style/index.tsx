import { tv } from "tailwind-variants";

const tvStyle = tv({
	base: [
		"w-full h-20",
		"border-b border-light-border dark:border-dark-border",
		"bg-light-bg-hg dark:bg-dark-bg-hg",
	],
});

export function headerStyle() {
	return tvStyle();
}
