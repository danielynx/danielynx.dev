import {
    TabGroup as HeadlessTabGroup,
    type TabGroupProps,
} from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";

export function TabGroup({
    children,
    ...props
}: PropsWithChildren<TabGroupProps<ElementType>>) {
    return <HeadlessTabGroup {...props}>{children}</HeadlessTabGroup>;
}
