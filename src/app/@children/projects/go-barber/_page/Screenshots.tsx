import Image from "next/image";
import { BsScissors } from "react-icons/bs";
import { CgScreenShot } from "react-icons/cg";
import { tv } from "tailwind-variants";
import { AppFrame } from "@/component/AppFrame";
import { BrowserFrame } from "@/component/BrowserFrame";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv({
    slots: {
        browser: ["flex flex-col items-center", "gap-y-2 md:gap-y-3"],
        app: [
            "flex flex-col md:flex-row items-center justify-center",
            "mt-6 md:mt-8",
            "gap-y-2 md:gap-x-3",
        ],
    },
});

export function Screenshots() {
    const style = tvStyle();

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
