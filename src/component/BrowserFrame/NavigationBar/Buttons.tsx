import { tv } from "tailwind-variants";
import { MdArrowBack, MdArrowForward, MdRefresh } from "react-icons/md";

const tvStyle = tv(
	{
		slots: {
			container: ["flex flex-row justify-start items-center", "text-white"],
			icon: "",
		},
		variants: {
			size: {
				initial: {
					container: "w-16 pr-1 gap-1",
					icon: "w-3 h-3",
				},
				xs: {
					container: "w-20",
					icon: "w-4 h-4",
				},
				sm: {
					container: "pr-2 gap-2",
					icon: "w-5 h-6",
				},
				md: {
					container: "w-32 gap-3",
				},
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

export function NavigationBarButtons() {
	const style = tvStyle({
		size: { xs: "xs", sm: "sm", md: "md" },
	});

	return (
		<div className={style.container()}>
			<MdArrowBack className={style.icon()} />
			<MdArrowForward className={style.icon()} />
			<MdRefresh className={style.icon()} />
		</div>
	);
}
