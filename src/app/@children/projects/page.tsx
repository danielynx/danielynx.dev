import { tv } from "tailwind-variants";
import { GoBarber } from "@/app/@children/projects/_page/GoBarber";
import { Portfolio } from "@/app/@children/projects/_page/Portfolio";

const tvStyle = tv({
    base: [
        "grow",
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
        "gap-4 xl:gap-5",
        "m-2",
    ],
});

export default function Page() {
    const style = tvStyle();

    return (
        <div className={style}>
            <Portfolio />
            <GoBarber />
        </div>
    );
}
