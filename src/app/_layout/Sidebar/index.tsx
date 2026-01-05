import { tv } from "tailwind-variants";
import { Company } from "@/app/_layout/Profile/Company";
import { Contacts } from "@/app/_layout/Profile/Contacts";
import { Description } from "@/app/_layout/Profile/Description";
import { Location } from "@/app/_layout/Profile/Location";
import { Avatar } from "@/app/_layout/Sidebar/Avatar";
import { ProfileGuard } from "@/app/_layout/Sidebar/ProfileGuard";

const tvStyle = tv({
    slots: {
        container: "flex flex-col",
        name: "mt-5 text-xl font-serif font-bold tracking-wide",
        divider: [
            "mt-3 mb-3",
            "border-t border-light-border dark:border-dark-border",
        ],
    },
});

export function Sidebar() {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <ProfileGuard>
                <Avatar />
                <div className={style.name()} />
            </ProfileGuard>
            <Description />
            <Company />
            <Location />
            <hr className={style.divider()} />
            <Contacts />
        </div>
    );
}
