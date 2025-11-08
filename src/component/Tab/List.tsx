import { Tab, type TabListProps } from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";

import { Navigator } from "@/component/Navigator";

export function TabList({
    children,
    className,
    ...props
}: PropsWithChildren<TabListProps<ElementType>>) {
    const painelStyle = Navigator.style.painel();

    return (
        <Tab.List className={painelStyle.container()} {...props}>
            {children}
        </Tab.List>
    );
}
