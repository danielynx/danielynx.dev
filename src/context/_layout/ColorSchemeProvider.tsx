"use client";

import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

import type { ColorSchemeEnum } from "@/type/_layout/ColorSchemeEnum";

// Disable SSR for this provider to avoid "flash of incorrect color scheme".
// The problem occurs when the color scheme is saved only in the client and the server cannot determine the user's
// preferred color scheme and prints the default (usually light) scheme, then in the client, the correct scheme is
// applied, causing a flash effect. By disabling SSR, we ensure that the provider only renders on the client side,
// where it can correctly apply the user's preferred color scheme from the start.
const NoSSR = dynamic(
    () =>
        import("@/context/_layout/ColorSchemeInternalProvider").then(
            (mod) => mod.ColorSchemeInternalProvider,
        ),
    {
        ssr: false,
    },
);

export {
    ColorSchemeContext,
    type ColorSchemeContextType,
} from "@/context/_layout/ColorSchemeInternalProvider";

function ColorSchemeProvider({
    children,
    initialValue,
}: PropsWithChildren<{ initialValue?: ColorSchemeEnum }>) {
    return (
        <div>
            <NoSSR initialValue={initialValue}>{children}</NoSSR>
        </div>
    );
}

export { ColorSchemeProvider };
