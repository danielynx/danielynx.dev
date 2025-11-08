import { Tab, type TabPanelProps } from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";

export function TabPanel({
    children,
    ...props
}: PropsWithChildren<TabPanelProps<ElementType>>) {
    return <Tab.Panel {...props}>{children}</Tab.Panel>;
}
