import type { PropsWithChildren } from "react";
import { MdSchool } from "react-icons/md";
import { Breadcrumb as HomeBreadcrumb } from "@/app/_page/Breadcrumb";
import { Breadcrumb as ComponentBreadcrumb } from "@/component/Breadcrumb";
import { TabEnum } from "@/type/_page/TabEnum";

export function Breadcrumb({ children }: PropsWithChildren) {
    return (
        <HomeBreadcrumb>
            <ComponentBreadcrumb.Item
                Icon={MdSchool}
                text="Courses"
                selected={false}
                link={`/?tab=${TabEnum.COURSES}`}
            />
            <ComponentBreadcrumb.Separator />
            {children}
        </HomeBreadcrumb>
    );
}
