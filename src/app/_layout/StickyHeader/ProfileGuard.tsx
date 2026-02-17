"use client";

import type { PropsWithChildren } from "react";
import { useSmallDevice } from "@/hook/useSmallDevice";
import { useProfileIntersectionStore } from "@/store/useProfileIntersectionStore";

export function ProfileGuard({ children }: PropsWithChildren) {
    const isProfileHidden = useProfileIntersectionStore((state) =>
        state.isProfileHidden(),
    );
    const isSmallDevice = useSmallDevice();

    return <>{(isProfileHidden || isSmallDevice) && children}</>;
}
