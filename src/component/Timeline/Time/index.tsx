import { tv } from "tailwind-variants";
import { MdToday } from "react-icons/md";

export interface TimeProps {
	date: string;
}

const tvStyle = tv(
	{
		slots: {
			container: "flex flex-col items-end justify-start",
			timeBar: "flex flex-row items-center justify-start",
			badge: [
				"flex flex-row items-center justify-start",
				"bg-light-bg-ct dark:bg-dark-bg-ct",
				"text-light-text-ct dark:text-dark-text-ct",
				"rounded-md",
				"font-mono font-bold",
			],
			icon: "h-4 w-4",
			dot: [
				"bg-light-bg-ct dark:bg-dark-bg-ct",
				"rounded-full",
				"ring-2 ring-light-bg-ct/50 dark:ring-dark-bg-ct/50",
				"ring-offset-2 ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg",
			],
			line: ["bg-light-bg-ct dark:bg-dark-bg-ct", "grow rounded-full"],
		},
		variants: {
			size: {
				initial: {
					container: "w-24",
					badge: "pl-1 text-xs h-5 w-16 mr-2",
					icon: "mr-1",
					dot: "h-2 w-2",
					line: "w-2 mt-1",
				},
				lg: {
					container: "w-30",
					badge: "pl-2 text-sm h-5 w-20 mr-3",
					icon: "mr-2",
					dot: "h-3 w-3",
					line: "w-3 mt-2",
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

export function Time({ date }: TimeProps) {
	const style = tvStyle({
		size: { lg: "lg" },
	});

	return (
		<div className={style.container()}>
			<div className={style.timeBar()}>
				<div className={style.badge()}>
					<MdToday className={style.icon()} />
					{date}
				</div>
				<div className={style.dot()} />
			</div>
			<div className={style.line()} />
		</div>
	);
}
