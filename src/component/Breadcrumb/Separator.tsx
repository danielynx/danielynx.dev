import { tv } from "tailwind-variants";
import { MdChevronRight } from "react-icons/md";

const tvStyle = tv(
	{
		base: "text-light-text/70 dark:text-dark-text/70",
		variants: {
			size: {
				initial: "h-4 w-4 xs:h-5 xs:w-5 2xs:h-6 2xs:w-6",
				sm: "h-7 w-7",
				md: "h-8 w-8",
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

export function BreadcrumbSeparator() {
	const style = tvStyle({ size: { sm: "sm", md: "md" } });

	return <MdChevronRight className={style} />;
}
