import { tv } from "tailwind-variants";
import { Avatar } from "@/app/_layout/ExpandedProfile/Avatar";
import { Company } from "@/app/_layout/ExpandedProfile/Company";
import { Contacts } from "@/app/_layout/ExpandedProfile/Contacts";
import { Location } from "@/app/_layout/ExpandedProfile/Location";
import { Name } from "@/app/_layout/ExpandedProfile/Name";

const tvStyle = tv({
    slots: {
        sidebar: [
            "w-90/100 sm:w-60/100 md:w-50/100 lg:w-full",
            "p-8",
            "bg-light-bg-hg dark:bg-dark-bg-hg",
            "border dark:border-0 border-light-border",
            "rounded-xl shadow-xl",
        ],
    },
});

export function ExpandedProfile() {
    const style = tvStyle();

    return (
        <aside className={style.sidebar()}>
            <Avatar />
            <Name />
            <Company />
            <Location />
            <Contacts />
        </aside>
    );
}
