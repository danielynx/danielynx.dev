"use client";

import type { PropsWithChildren } from "react";
import { useProfileIntersection } from "@/hook/_layout/useProfileIntersection";
import { useSmallDevice } from "@/hook/_layout/useSmallDevice";

export function ProfileGuard({ children }: PropsWithChildren) {
    const { isProfileHidden } = useProfileIntersection();
    const isSmallDevice = useSmallDevice();

    return <>{(isProfileHidden || isSmallDevice) && children}</>;
}
