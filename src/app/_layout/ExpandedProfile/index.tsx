import { tv } from "tailwind-variants";
import { Content as ContentArea } from "@/app/_layout/area/horizontal/Content";
import { Sidebar as SidebarArea } from "@/app/_layout/area/vertical/Sidebar";
import { Avatar } from "@/app/_layout/ExpandedProfile/Avatar";
import { Company } from "@/app/_layout/ExpandedProfile/Company";
import { Contacts } from "@/app/_layout/ExpandedProfile/Contacts";
import { Location } from "@/app/_layout/ExpandedProfile/Location";
import { Name } from "@/app/_layout/ExpandedProfile/Name";

const tvStyle = tv(
    {
        slots: {
            content: "flex flex-col justify-start",
            sidebar: [
                "py-8 mb-3",
                "bg-light-bg-hg dark:bg-dark-bg-hg",
                "border dark:border-0 border-light-border",
                "rounded-xl shadow-xl",
            ],
        },
        variants: {
            size: {
                initial: {
                    content: "items-center",
                    sidebar: "mt-28",
                },
                lg: {
                    content: "items-end",
                    sidebar: "mt-4",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["lg"],
    },
);

export function ExpandedProfile() {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <div className={style.content({ className: ContentArea.style() })}>
            <aside
                className={style.sidebar({ className: SidebarArea.style() })}
            >
                <Avatar />
                <Name />
                <Company />
                <Location />
                <Contacts />
            </aside>
        </div>
    );
}
