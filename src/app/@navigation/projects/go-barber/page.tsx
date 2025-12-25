"use client";

import { BsScissors } from "react-icons/bs";
import { Breadcrumb as ProjectsBreadcrumb } from "@/app/@navigation/projects/Breadcrumb";
import { Breadcrumb as BreadcrumbComponent } from "@/component/Breadcrumb";

export default function Page() {
    return (
        <ProjectsBreadcrumb>
            <BreadcrumbComponent.Separator />
            <BreadcrumbComponent.Item
                text="Go Barber"
                Icon={BsScissors}
                href="/projects/go-barber"
            />
        </ProjectsBreadcrumb>
    );
}
