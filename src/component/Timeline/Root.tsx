import type { PropsWithChildren } from "react";

export function Root({ children }: PropsWithChildren) {
    return <div className="flex flex-row w-full mb-6">{children}</div>;
}
