"use client";

import { MdHome } from "react-icons/md";
import { Breadcrumb as BreadcrumbComponent } from "@/component/Breadcrumb";

export function Breadcrumb({ children }: { children: React.ReactNode }) {
    return (
        <BreadcrumbComponent>
            <BreadcrumbComponent.Item text="Home" Icon={MdHome} href="/" />
            {children}
        </BreadcrumbComponent>
    );
}
