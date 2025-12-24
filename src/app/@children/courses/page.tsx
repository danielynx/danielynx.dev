import { tv } from "tailwind-variants";

import { FreeCodeCamp } from "@/app/@children/courses/_page/FreeCodeCamp";
import { MongoDb } from "@/app/@children/courses/_page/MongoDb";
import { Rocketseat } from "@/app/@children/courses/_page/Rocketseat";
import { Symfony } from "@/app/@children/courses/_page/Symfony";

const tvStyle = tv({
    base: ["grow", "grid grid-cols-1 sm:grid-cols-2", "gap-4 xl:gap-5", "m-2"],
});

export default function Page() {
    const style = tvStyle();

    return (
        <div className={style}>
            <Symfony />
            <Rocketseat />
            <MongoDb />
            <FreeCodeCamp />
        </div>
    );
}
