import { BsScissors } from "react-icons/bs";
import { tv } from "tailwind-variants";
import { Link as RocketseatLink } from "@/app/@children/courses/rocketseat/_page/Link";
import { Breadcrumb as ProjectBreadcrumb } from "@/app/@children/projects/_page/Breadcrumb";
import { Repository } from "@/app/@children/projects/go-barber/_page/Repository";
import { Screenshot } from "@/app/@children/projects/go-barber/_page/Screenshot";
import { Technology } from "@/app/@children/projects/go-barber/_page/Technology";
import { MainContent } from "@/app/_layout/MainContent";
import { Navigation } from "@/app/_layout/Navigation";
import { Breadcrumb as ComponentBreadcrumb } from "@/component/Breadcrumb";

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
            <Navigation>
                <ProjectBreadcrumb>
                    <ComponentBreadcrumb.Item
                        Icon={BsScissors}
                        text="GoBarber"
                        selected={true}
                    />
                </ProjectBreadcrumb>
            </Navigation>
            <MainContent>
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
                <Technology />
                <Repository />
                <Screenshot />
            </MainContent>
        </>
    );
}
