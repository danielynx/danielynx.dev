"use client";

import { SiMongodb } from "react-icons/si";
import { Breadcrumb as CoursesBreadcrumb } from "@/app/@navigation/courses/Breadcrumb";
import { Breadcrumb as BreadcrumbComponent } from "@/component/Breadcrumb";

export default function Page() {
    return (
        <CoursesBreadcrumb>
            <BreadcrumbComponent.Separator />
            <BreadcrumbComponent.Item
                text="MongoDB University"
                Icon={SiMongodb}
                href="/courses/mongodb"
            />
        </CoursesBreadcrumb>
    );
}
