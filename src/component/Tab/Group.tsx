import { Tab, type TabGroupProps } from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";

export function TabGroup({
    children,
    ...props
}: PropsWithChildren<TabGroupProps<ElementType>>) {
    return <Tab.Group {...props}>{children}</Tab.Group>;
}
