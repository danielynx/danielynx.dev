import { MdRocketLaunch } from "react-icons/md";
import { tv } from "tailwind-variants";
import { AppContainerContent } from "@/app/_layout/container/Content";
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
            <AppContainerContent.Header>
                <CourseBreadcrumb>
                    <ComponentBreadcrumb.Item
                        Icon={MdRocketLaunch}
                        text="Rocketseat"
                        selected={true}
                    />
                </CourseBreadcrumb>
            </AppContainerContent.Header>
            <AppContainerContent.Body>
                <div className={style}>
                    <p>
                        {<Link />} is a Brazilian coding school that focuses on
                        JavaScript Technologies.
                    </p>
                </div>
                <GoStack />
            </AppContainerContent.Body>
        </>
    );
}
