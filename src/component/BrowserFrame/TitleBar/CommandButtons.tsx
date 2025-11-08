import { MdClose, MdCrop54, MdRemove } from "react-icons/md";
import { tv } from "tailwind-variants";

const tvStyle = tv(
	{
		slots: {
			container: ["flex flex-row justify-start items-center", "mr-3 gap-2"],
			circle: ["flex flex-row justify-center items-center", "rounded-full"],
			icon: "",
		},
		variants: {
			size: {
				initial: {
					circle: "w-4 h-4",
					icon: "w-2 h-2",
				},
				xs: {
					icon: "w-3 h-3",
				},
				sm: {
					circle: "w-5 h-5",
					icon: "w-4 h-4",
				},
			},
		},
		defaultVariants: {
			size: "initial",
		},
	},
	{
		responsiveVariants: ["xs", "sm"],
	},
);

export function TitleBarCommandButtons() {
	const style = tvStyle({
		size: { xs: "xs", sm: "sm" },
	});

	return (
		<div className={style.container()}>
			<div className={style.circle({ className: "bg-green-500" })}>
				<MdRemove className={style.icon()} />
			</div>
			<div className={style.circle({ className: "bg-yellow-500" })}>
				<MdCrop54 className={style.icon()} />
			</div>
			<div className={style.circle({ className: "bg-red-500" })}>
				<MdClose className={style.icon()} />
			</div>
		</div>
	);
}
