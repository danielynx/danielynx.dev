"use client";

import { useMediaQuery } from "react-responsive";

function useSmallDevice(): boolean {
    return useMediaQuery({ maxWidth: 1024 });
}

export { useSmallDevice };
