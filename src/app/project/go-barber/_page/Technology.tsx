import { tv } from "tailwind-variants";
import { GiCircuitry } from "react-icons/gi";
import {
	SiReact,
	SiTypescript,
	SiNodedotjs as SiNodeJs,
	SiExpress,
	SiYarn,
	SiJest,
	SiStyledcomponents,
	SiGithubactions,
} from "react-icons/si";

import { SessionHeader } from "@/component/SessionHeader";
import { Badge } from "@/component/Badge";

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

export function GoBarberTechnology() {
	const style = tvStyle({
		size: { md: "md" },
	});

	return (
		<>
			<SessionHeader Icon={GiCircuitry} title="Technologies" />
			<div className={style.container()}>
				<Badge Icon={SiNodeJs} title="Node JS" />
				<Badge Icon={SiReact} title="React JS and Native" />
				<Badge Icon={SiExpress} title="Express" />
				<Badge Icon={SiTypescript} title="TypeScript" />

				<Badge Icon={SiYarn} title="Yarn" />
				<Badge Icon={SiJest} title="Jest" />
				<Badge Icon={SiStyledcomponents} title="Styled Components" />
				<Badge Icon={SiGithubactions} title="GitHub Actions" />
			</div>
		</>
	);
}
