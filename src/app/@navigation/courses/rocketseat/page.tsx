"use client";

import { MdRocketLaunch } from "react-icons/md";
import { Breadcrumb as CoursesBreadcrumb } from "@/app/@navigation/courses/Breadcrumb";
import { Breadcrumb as BreadcrumbComponent } from "@/component/Breadcrumb";

export default function Page() {
    return (
        <CoursesBreadcrumb>
            <BreadcrumbComponent.Separator />
            <BreadcrumbComponent.Item
                text="Rocketseat"
                Icon={MdRocketLaunch}
                href="/courses/rocketseat"
            />
        </CoursesBreadcrumb>
    );
}
