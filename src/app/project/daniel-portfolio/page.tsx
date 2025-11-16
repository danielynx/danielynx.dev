import { ImProfile } from "react-icons/im";
import { tv } from "tailwind-variants";
import { AppContainerContent } from "@/app/_layout/container/Content";
import { Breadcrumb as ProjectBreadcrumb } from "@/app/project/_page/Breadcrumb";
import { Repository } from "@/app/project/daniel-portfolio/_page/Repository";
import { Technology } from "@/app/project/daniel-portfolio/_page/Technology";
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
                <ProjectBreadcrumb>
                    <ComponentBreadcrumb.Item
                        Icon={ImProfile}
                        text="Daniel's Portfolio"
                        selected={true}
                    />
                </ProjectBreadcrumb>
            </AppContainerContent.Header>
            <AppContainerContent.Body>
                <div className={style}>
                    <p>
                        The {`Daniel's`} Portfolio project is this web
                        application, and its proposal is show my career as a
                        Software Developer.
                    </p>
                    <p>
                        I was wanting to learn the NextJS framework, so I
                        decided to build my own portfolio to learn by developing
                        a real project. I took this opportunity to learn
                        Tailwind too and to improve my skills in build
                        responsive layout, create page design and create pages
                        with the color scheme chooser.
                    </p>
                    <p>
                        {`It's`} important to mentionate that the layout was
                        inspired in the GitHub page, but the entire application
                        was built by myself. I learn a lot by trying many times,
                        until I was able of developing everything that I
                        intending to do.
                    </p>
                </div>
                <Technology />
                <Repository />
            </AppContainerContent.Body>
        </>
    );
}
