import Image from "next/image";
import { BsScissors } from "react-icons/bs";
import { CgScreenShot } from "react-icons/cg";
import { tv } from "tailwind-variants";
import { AppFrame } from "@/component/AppFrame";
import { Builder as BrowserFrameBuilder } from "@/component/BrowserFrame/Builder";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv({
    slots: {
        browser: ["flex flex-col", "items-center", "gap-y-2 md:gap-y-3"],
        app: [
            "flex flex-col md:flex-row",
            "items-center justify-center",
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
                <BrowserFrameBuilder
                    Favicon={BsScissors}
                    tabName="GoBarber"
                    url="https://gobarber.dev/login"
                >
                    <Image
                        src="/projects/go-barber/web/login.webp"
                        width={800}
                        height={400}
                        alt="GoBarber's web login page"
                    />
                </BrowserFrameBuilder>
                <BrowserFrameBuilder
                    Favicon={BsScissors}
                    tabName="GoBarber"
                    url="https://gobarber.dev/signup"
                >
                    <Image
                        src="/projects/go-barber/web/signup.webp"
                        width={800}
                        height={400}
                        alt="GoBarber's web signup page"
                    />
                </BrowserFrameBuilder>
                <BrowserFrameBuilder
                    Favicon={BsScissors}
                    tabName="GoBarber"
                    url="https://gobarber.dev/admin/appointments"
                >
                    <Image
                        src="/projects/go-barber/web/appointments.webp"
                        width={800}
                        height={400}
                        alt="GoBarber's web appointments page"
                    />
                </BrowserFrameBuilder>
            </div>
            <div className={style.app()}>
                <AppFrame>
                    <Image
                        src="/projects/go-barber/app/login.webp"
                        width={200}
                        height={403}
                        alt="GoBarber's app login screen"
                    />
                </AppFrame>
                <AppFrame>
                    <Image
                        src="/projects/go-barber/app/hairdressers.webp"
                        width={200}
                        height={403}
                        alt="GoBarber's app hairdressers screen"
                    />
                </AppFrame>
                <AppFrame>
                    <Image
                        src="/projects/go-barber/app/appointments.webp"
                        width={200}
                        height={403}
                        alt="GoBarber's app appointments screen"
                    />
                </AppFrame>
            </div>
        </>
    );
}
