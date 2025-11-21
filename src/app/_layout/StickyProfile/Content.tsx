"use client";

import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { useProfileIntersection } from "@/hook/_layout/useProfileIntersection";

const tvStyle = tv({
    base: "grow flex flex-row items-center justify-start",
});

export function Content({ children }: PropsWithChildren) {
    const { isProfileHidden } = useProfileIntersection();

    const style = tvStyle();

    return <div className={style}>{isProfileHidden && children}</div>;
}
