import { GiCircuitry } from "react-icons/gi";
import {
	SiNextdotjs as SiNextJs,
	SiNodedotjs as SiNodeJs,
	SiNpm,
	SiReact,
	SiTailwindcss as SiTailwind,
	SiTypescript,
	SiZod,
} from "react-icons/si";
import { tv } from "tailwind-variants";
import { Badge } from "@/component/Badge";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv(
	{
		slots: {
			container: "grid",
		},
		variants: {
			size: {
				initial: {
					container: "grid-cols-2 gap-2",
				},
				md: {
					container: "grid-cols-4 gap-4",
				},
			},
		},
		defaultVariants: {
			size: "initial",
		},
	},
	{
		responsiveVariants: ["md"],
	},
);

export function DanielPortfolioTechnology() {
	const style = tvStyle({
		size: { md: "md" },
	});

	return (
		<>
			<SessionHeader Icon={GiCircuitry} title="Technologies" />
			<div className={style.container()}>
				<Badge Icon={SiNextJs} title="Next JS" />
				<Badge Icon={SiReact} title="React JS" />
				<Badge Icon={SiTypescript} title="TypeScript" />
				<Badge Icon={SiNodeJs} title="Node JS" />
				<Badge Icon={SiTailwind} title="Tailwind and Variants" />
				<Badge Icon={SiNpm} title="Npm" />
				<Badge Icon={SiZod} title="Zod" />
			</div>
		</>
	);
}
