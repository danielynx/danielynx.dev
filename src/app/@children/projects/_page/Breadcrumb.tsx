import type { PropsWithChildren } from "react";
import { MdDeveloperBoard } from "react-icons/md";
import { Breadcrumb as HomeBreadcrumb } from "@/app/@children/_page/Breadcrumb";
import { Breadcrumb as ComponentBreadcrumb } from "@/component/Breadcrumb";
import { TabEnum } from "@/type/_page/TabEnum";

export function Breadcrumb({ children }: PropsWithChildren) {
    return (
        <HomeBreadcrumb>
            <ComponentBreadcrumb.Item
                Icon={MdDeveloperBoard}
                text="Projects"
                selected={false}
                link={`/?tab=${TabEnum.PROJECTS}`}
            />
            <ComponentBreadcrumb.Separator />
            {children}
        </HomeBreadcrumb>
    );
}
