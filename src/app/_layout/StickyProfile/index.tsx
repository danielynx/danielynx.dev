import { tv } from "tailwind-variants";
import { Header as HeaderArea } from "@/app/_layout/area/horizontal/Header";
import { Sidebar as SidebarArea } from "@/app/_layout/area/vertical/Sidebar";
import { Avatar } from "@/app/_layout/StickyProfile/Avatar";
import { AppColorSchema } from "@/app/_layout/StickyProfile/ColorSchema";
import { Content } from "@/app/_layout/StickyProfile/Content";
import { Name } from "@/app/_layout/StickyProfile/Name";

const tvStyle = tv(
    {
        slots: {
            header: "flex flex-row items-center top-0 z-10",
            sidebar: "flex flex-row items-center justify-end py-2",
        },
        variants: {
            size: {
                initial: {
                    header: "justify-center fixed",
                },
                lg: {
                    header: "justify-end sticky",
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

export function StickyProfile() {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <div className={style.header({ className: HeaderArea.style() })}>
            <div className={style.sidebar({ className: SidebarArea.style() })}>
                <Content>
                    <Avatar />
                    <Name />
                </Content>
                <AppColorSchema />
            </div>
        </div>
    );
}
