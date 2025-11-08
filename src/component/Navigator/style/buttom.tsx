import { tv, type VariantProps } from "tailwind-variants";

const tvStyle = tv(
	{
		slots: {
			container: [
				"flex flew-row items-center justify-center",
				"px-2 rounded-lg",
				"first:ml-0 ml-1 last:mr-0 mr-1",
			],
			icon: "",
			text: "font-semibold font-mono",
		},
		variants: {
			selected: {
				true: {
					container: [
						"shadow",
						"bg-light-bg-ct dark:bg-dark-bg-ct",
						"text-light-text-ct dark:text-dark-text-ct",
						"outline-none ring-0",
					],
				},
				false: {
					container: [
						"text-light-text/70 dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text",
						"hover:ring-2 ring-offset-1",
						"ring-light-bg-ct/50 dark:ring-dark-bg-ct/50",
						"ring-offset-light-bg-hg/80 dark:ring-offset-dark-bg-hg/80",
					],
				},
			},
			size: {
				initial: {
					icon: "h-4 w-4 xs:h-5 xs:w-5",
					text: "pl-1 text-xs xs:text-sm 2xs:text-base",
				},
				sm: {
					icon: "h-6 w-6",
					text: "pl-1.5 text-lg",
				},
				md: {
					icon: "h-7 w-7",
					text: "pl-2",
				},
			},
		},
		defaultVariants: {
			size: "initial",
		},
	},
	{
		responsiveVariants: ["sm", "md"],
	},
);

export type StyleButtomProps = Omit<VariantProps<typeof tvStyle>, "size">;

export function styleButtom({ selected = false }: StyleButtomProps) {
	return tvStyle({ size: { sm: "sm", md: "md" }, selected });
}
