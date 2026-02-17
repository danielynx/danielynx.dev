"use client";

import type { PropsWithChildren } from "react";
import { useSmallDevice } from "@/hook/useSmallDevice";

export function ProfileGuard({ children }: PropsWithChildren) {
    const isSmallDevice = useSmallDevice();

    return <>{!isSmallDevice && children}</>;
}
