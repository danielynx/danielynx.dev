"use client";

import { MdDeveloperBoard } from "react-icons/md";
import { Breadcrumb as HomeBreadcrumb } from "@/app/@navigation/Breadcrumb";
import { Breadcrumb as BreadcrumbComponent } from "@/component/Breadcrumb";

export function Breadcrumb({ children }: { children: React.ReactNode }) {
    return (
        <HomeBreadcrumb>
            <BreadcrumbComponent.Separator />
            <BreadcrumbComponent.Item
                text="Projects"
                Icon={MdDeveloperBoard}
                href="/projects"
            />
            {children}
        </HomeBreadcrumb>
    );
}
