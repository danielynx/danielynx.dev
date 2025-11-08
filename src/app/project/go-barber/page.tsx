import { BsScissors } from "react-icons/bs";
import { tv } from "tailwind-variants";
import { AppContainerContent } from "@/app/_layout/container/Content";
import { RocketseatLink } from "@/app/course/rocketseat/_page/Link";
import { ProjectBreadcrumb } from "@/app/project/_page/Breadcrumb";
import { Breadcrumb } from "@/component/Breadcrumb";
import { GoBarberRepository } from "./_page/Repository";
import { GoBarberScreenshot } from "./_page/Screenshot";
import { GoBarberTechnology } from "./_page/Technology";

const tvStyle = tv(
    {
        base: "space-y-4 leading-relaxed",
        variants: {
            size: {
                initial: "text-base",
                lg: "text-lg",
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

export default function Page() {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <>
            <AppContainerContent.Header>
                <ProjectBreadcrumb>
                    <Breadcrumb.Item
                        Icon={BsScissors}
                        text="GoBarber"
                        selected={true}
                    />
                </ProjectBreadcrumb>
            </AppContainerContent.Header>
            <AppContainerContent.Body>
                <div className={style}>
                    <p>
                        The GoBarber project is a barbershop schedule manager,
                        compound by a headless application, a web application
                        and a mobile application.
                    </p>
                    <p>
                        It was built during the {<RocketseatLink />}
                        {`'s`} GoStack course, which addressed the stack that is
                        compounded by the NodeJS, ReactJS and React Native
                        technologies.
                    </p>
                </div>
                <GoBarberTechnology />
                <GoBarberRepository />
                <GoBarberScreenshot />
            </AppContainerContent.Body>
        </>
    );
}
