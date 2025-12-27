import { tv } from "tailwind-variants";
import { DanielPortfolio } from "@/app/@children/projects/_page/DanielPortfolio";
import { GoBarber } from "@/app/@children/projects/_page/GoBarber";

const tvStyle = tv({
    base: ["grow", "grid grid-cols-1 sm:grid-cols-2", "gap-4 xl:gap-5", "m-2"],
});

export default function Page() {
    const style = tvStyle();

    return (
        <div className={style}>
            <DanielPortfolio />
            <GoBarber />
        </div>
    );
}
