import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const tvStyle = tv({
    base: ["border-4 border-outline", "rounded-sm"],
});

export function AppFrame({ children }: PropsWithChildren) {
    const style = tvStyle();

    return <div className={style}>{children}</div>;
}
