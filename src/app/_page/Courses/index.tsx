import { tv } from "tailwind-variants";

import { FreeCodeCamp } from "@/app/_page/Courses/FreeCodeCamp";
import { MongoDb } from "@/app/_page/Courses/MongoDb";
import { Rocketseat } from "@/app/_page/Courses/Rocketseat";
import { Symfony } from "@/app/_page/Courses/Symfony";

const tvStyle = tv(
    {
        base: "grid m-2",
        variants: {
            size: {
                initial: "grid-cols-1 gap-4",
                sm: "grid-cols-2",
                xl: "gap-5",
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["sm", "xl"],
    },
);

export function Courses() {
    const style = tvStyle({
        size: { sm: "sm", xl: "xl" },
    });

    return (
        <div className={style}>
            <Symfony />
            <Rocketseat />
            <MongoDb />
            <FreeCodeCamp />
        </div>
    );
}
