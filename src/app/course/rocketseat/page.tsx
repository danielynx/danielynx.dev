import { MdRocketLaunch } from "react-icons/md";
import { tv } from "tailwind-variants";
import { MainContent } from "@/app/_layout/MainContent";
import { Navigation } from "@/app/_layout/Navigation";
import { Breadcrumb as CourseBreadcrumb } from "@/app/course/_page/Breadcrumb";
import { GoStack } from "@/app/course/rocketseat/_page/GoStack";
import { Link } from "@/app/course/rocketseat/_page/Link";
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
                <CourseBreadcrumb>
                    <ComponentBreadcrumb.Item
                        Icon={MdRocketLaunch}
                        text="Rocketseat"
                        selected={true}
                    />
                </CourseBreadcrumb>
            </Navigation>
            <MainContent>
                <div className={style}>
                    <p>
                        {<Link />} is a Brazilian coding school that focuses on
                        JavaScript Technologies.
                    </p>
                </div>
                <GoStack />
            </MainContent>
        </>
    );
}
