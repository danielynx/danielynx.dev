import type { PropsWithChildren } from "react";
import { Content } from "@/component/Timeline/Content";
import { Time } from "@/component/Timeline/Time";

function Timeline({ children }: PropsWithChildren) {
    return <div className="flex flex-row w-full mb-6">{children}</div>;
}

Timeline.Content = Content;
Timeline.Time = Time;

export { Timeline };
