import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

export interface HighlightFrameProps {
    containerClass?: string;
    borderColor?: string;
}

const tvStyle = tv({
    compoundSlots: [
        {
            slots: [
                "topLeftCorner",
                "topRightCorner",
                "bottomLeftCorner",
                "bottomRightCorner",
            ],
            class: ["absolute", "h-3 w-3", "pointer-events-none"],
        },
    ],
    slots: {
        container: ["relative"],
        topLeftCorner: ["left-0 top-0", "border-l-2 border-t-2"],
        topRightCorner: ["right-0 top-0", "border-r-2 border-t-2"],
        bottomLeftCorner: ["left-0 bottom-0", "border-l-2 border-b-2"],
        bottomRightCorner: ["right-0 bottom-0", "border-r-2 border-b-2"],
    },
});

function HighlightFrame({
    children,
    containerClass = "p-4",
    borderColor = "border-secondary",
}: PropsWithChildren<HighlightFrameProps>) {
    const style = tvStyle();

    return (
        <div className={style.container({ class: containerClass })}>
            <div>{children}</div>
            <span className={style.topLeftCorner({ class: borderColor })} />
            <span className={style.topRightCorner({ class: borderColor })} />
            <span
                className={style.bottomLeftCorner({
                    class: borderColor,
                })}
            />
            <span
                className={style.bottomRightCorner({
                    class: borderColor,
                })}
            />
        </div>
    );
}

export { HighlightFrame };
