import {
    TabList as HeadlessTabList,
    type TabListProps,
} from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";

import { Navigator } from "@/component/Navigator";

export function TabList({
    children,
    className,
    ...props
}: PropsWithChildren<TabListProps<ElementType>>) {
    const painelStyle = Navigator.style.painel();

    return (
        <HeadlessTabList className={painelStyle.container()} {...props}>
            {children}
        </HeadlessTabList>
    );
}
