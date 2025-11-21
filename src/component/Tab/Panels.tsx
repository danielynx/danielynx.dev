import {
    TabPanels as HeadlessTabPanels,
    type TabPanelsProps,
} from "@headlessui/react";
import type { ElementType, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    base: "grow",
});

export function TabPanels({
    children,
    className,
    ...props
}: PropsWithChildren<TabPanelsProps<ElementType>>) {
    const style = tvStyle({ className });

    return (
        <HeadlessTabPanels className={style} {...props}>
            {children}
        </HeadlessTabPanels>
    );
}
