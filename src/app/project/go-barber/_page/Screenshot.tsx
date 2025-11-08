import { tv } from "tailwind-variants";
import Image from "next/image";
import { CgScreenShot } from "react-icons/cg";
import { BsScissors } from "react-icons/bs";

import { BrowserFrame } from "@/component/BrowserFrame";
import { AppFrame } from "@/component/AppFrame";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv(
	{
		slots: {
			browser: "flex flex-col items-center",
			app: "flex items-center justify-center",
		},
		variants: {
			size: {
				initial: {
					browser: "gap-y-2",
					app: "flex-col mt-6 gap-y-2",
				},
				md: {
					browser: "gap-y-3",
					app: "flex-row mt-8 gap-x-3",
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

export function GoBarberScreenshot() {
	const style = tvStyle({
		size: { md: "md" },
	});

	return (
		<>
			<SessionHeader Icon={CgScreenShot} title="Screenshots" />
			<div className={style.browser()}>
				<BrowserFrame.Builder
					Favicon={BsScissors}
					tabName="GoBarber"
					url="https://gobarber.dev/login"
				>
					<Image
						src="/project/go-barber/web/login.png"
						width={800}
						height={400}
						alt="GoBarber's web login page"
					/>
				</BrowserFrame.Builder>
				<BrowserFrame.Builder
					Favicon={BsScissors}
					tabName="GoBarber"
					url="https://gobarber.dev/signup"
				>
					<Image
						src="/project/go-barber/web/signup.png"
						width={800}
						height={400}
						alt="GoBarber's web signup page"
					/>
				</BrowserFrame.Builder>
				<BrowserFrame.Builder
					Favicon={BsScissors}
					tabName="GoBarber"
					url="https://gobarber.dev/admin/appointments"
				>
					<Image
						src="/project/go-barber/web/appointments.png"
						width={800}
						height={400}
						alt="GoBarber's web appointments page"
					/>
				</BrowserFrame.Builder>
			</div>
			<div className={style.app()}>
				<AppFrame>
					<Image
						src="/project/go-barber/app/login.png"
						width={200}
						height={403}
						alt="GoBarber's app login screen"
					/>
				</AppFrame>
				<AppFrame>
					<Image
						src="/project/go-barber/app/hairdressers.png"
						width={200}
						height={403}
						alt="GoBarber's app hairdressers screen"
					/>
				</AppFrame>
				<AppFrame>
					<Image
						src="/project/go-barber/app/appointments.png"
						width={200}
						height={403}
						alt="GoBarber's app appointments screen"
					/>
				</AppFrame>
			</div>
		</>
	);
}
