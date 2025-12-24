import type { PropsWithChildren } from "react";
import { MdHome } from "react-icons/md";

import { Breadcrumb as ComponentBreadcrumb } from "@/component/Breadcrumb";

export function Breadcrumb({ children }: PropsWithChildren) {
    return (
        <ComponentBreadcrumb.Root>
            <ComponentBreadcrumb.Item
                Icon={MdHome}
                text="Home"
                selected={false}
                link="/"
            />
            <ComponentBreadcrumb.Separator />
            {children}
        </ComponentBreadcrumb.Root>
    );
}
