"use client";

import { ImProfile } from "react-icons/im";
import { Breadcrumb as ProjectsBreadcrumb } from "@/app/@navigation/projects/Breadcrumb";
import { Breadcrumb as BreadcrumbComponent } from "@/component/Breadcrumb";

export default function Page() {
    return (
        <ProjectsBreadcrumb>
            <BreadcrumbComponent.Separator />
            <BreadcrumbComponent.Item
                text="Daniel Portfolio"
                Icon={ImProfile}
                href="/projects/daniel-portfolio"
            />
        </ProjectsBreadcrumb>
    );
}
