import {
    TabPanel as HeadlessTabPanel,
    type TabPanelProps,
} from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";

export function TabPanel({
    children,
    ...props
}: PropsWithChildren<TabPanelProps<ElementType>>) {
    return <HeadlessTabPanel {...props}>{children}</HeadlessTabPanel>;
}
